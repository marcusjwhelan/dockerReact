import React, {Component} from 'react'
import DesktopHome from './Desktop_Home'
import MobileHome from './Mobile_Home'
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles'
import Box from '@material-ui/core/Box'
import {AppState} from '../../store'
import {ThunkDispatch} from 'redux-thunk'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {match, withRouter} from 'react-router'
import {IGetNewsResp, INews} from '../../models/responseObjects'
import {
    appendNewsAction, getNewsAction, clearGetNewsAction, newsClearAction,
    TappendNewsAction, TgetNewsAction, TclearGetNewsAction, TnewsClearAction
} from '../../actions/news'
import {INewsReducer} from '../../reducers/news'
import {createStyles, Theme} from '@material-ui/core'
import {History, Location} from 'history'

const styles = (_theme: Theme) => createStyles({
    root: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -100,
        backgroundImage: `url(http://www.humanmode.com/wp-content/uploads/2020/02/mechsuit_bg3.png?id=12243)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        opacity: 0.5
    }
})

interface InjectedProps extends WithStyles<typeof styles> {}

interface State {
    // news Display Error
    newsError: string
    // search news
    skip: number
    limit: number
    // toggles
    newsDisplayError: boolean
    mobile: boolean
    // waiters
    getNewsWaiter: boolean
    setNewsWaiter: boolean
}

interface IStateProps {
    news: INews[] | null
    get_news: IGetNewsResp | null
    get_news_error: string | null
}

interface IDispatchProps {
    appendNewsAction: TappendNewsAction
    getNewsAction: TgetNewsAction
    clearGetNewsAction: TclearGetNewsAction
    newsClearAction: TnewsClearAction
}

interface HocInjected {
    location: Location
    match: match
    history: History
}

type HomeProps = IStateProps & IDispatchProps & InjectedProps & HocInjected

const mapStateToProps = (state: any): IStateProps => {
    const news = state.news as INewsReducer
    return {
        news: news.news,
        get_news: news.get_news,
        get_news_error: news.get_news_error
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, void, any>): IDispatchProps => {
    return {
        appendNewsAction: bindActionCreators(appendNewsAction, dispatch),
        getNewsAction: bindActionCreators(getNewsAction, dispatch),
        clearGetNewsAction: bindActionCreators(clearGetNewsAction, dispatch),
        newsClearAction: bindActionCreators(newsClearAction, dispatch)
    }
}

class Home extends Component<HomeProps, State> {
    // news display error
    private _newError: string = 'newsError'
    // search news
    // private _skip: string = 'skip'
    // private _limit: string = 'limit'
    // toggles
    private _newsDisplayError: string = 'newsDisplayError'
    // waiters
    private _getNewsWaiter: string = 'getNewsWaiter'
    private _setNewsWaiter: string = 'setNewsWaiter'
    constructor(props: HomeProps) {
        super(props)
        this.state = {
            // News Display Error
            newsError: '',
            // search News
            skip: 0,
            limit: 10,
            // toggles
            newsDisplayError: false,
            mobile: true,
            // waiters
            getNewsWaiter: false,
            setNewsWaiter: false
        }
        this.resize = this.resize.bind(this)
        this.setValue = this.setValue.bind(this)
    }
    public componentDidMount(): void {
        this.setValue(this._getNewsWaiter, true)
        this.props.getNewsAction(this.state.skip, this.state.limit)
        window.addEventListener('resize', this.resize)
        this.resize()
    }
    public componentDidUpdate(_prevProps: Readonly<HomeProps>, _prevState: Readonly<State>, _snapshot?: any): void {
        /** append news handler */
        if (this.state.setNewsWaiter && !this.state.getNewsWaiter &&
            (!this.props.get_news && !this.props.get_news_error && this.props.news) &&
            !this.state.newsDisplayError
        ) {
            this.setValue(this._setNewsWaiter, false)
        }
        /** Error handling for get news */
        if (this.state.getNewsWaiter && !this.state.setNewsWaiter &&
            (this.props.get_news || this.props.get_news_error) &&
            !this.state.newsDisplayError
        ) {
            if (this.props.get_news_error && !this.props.news) {
                // there was an error but this is the first search
                this.setValue(this._newError, 'Could not load news reload page')
                this.setValue(this._newsDisplayError, true)
            } else if (this.props.get_news_error && this.props.news) {
                // there was an error but the news is already showing
                // do not display error since there is already news loaded
                this.setValue(this._newsDisplayError, false)
            }
            if (this.props.get_news) {
                switch (this.props.get_news.rcode) {
                    case -1:
                        this.setValue(this._newError, this.props.get_news.rdesc)
                        this.setValue(this._newsDisplayError, true)
                        break
                    case 1:
                        this.setValue(this._newError, '')
                        this.setValue(this._newsDisplayError, false)
                        this.setValue(this._getNewsWaiter, false)
                        this.setValue(this._setNewsWaiter, true)
                        if (this.props.get_news.news.length > 0) {
                            this.props.appendNewsAction(this.props.get_news.news)
                        }
                        this.props.clearGetNewsAction()
                        break
                    default:
                        break
                }
            }
        }
    }

    public componentWillUnmount(): void {
        this.props.newsClearAction()
        window.removeEventListener('resize', this.resize)
    }
    private setValue(key: string, value: any) {
        this.setState(((): any => ({[key]: value}))())
    }
    private resize() {
        this.setValue('mobile', window.innerWidth <= 840)
    }
    public render() {
        const {
            news, get_news, get_news_error, getNewsAction,
            clearGetNewsAction, appendNewsAction, newsClearAction, classes
        } = this.props
        const {mobile} = this.state
        return (
            <Box height={'100%'} width={'100%'}>
                <div className={classes.root}/>
                {mobile ?
                    <MobileHome
                        news={news}
                        get_news={get_news}
                        get_news_error={get_news_error}
                        getNewsAction={getNewsAction}
                        clearGetNewsAction={clearGetNewsAction}
                        appendNewsAction={appendNewsAction}
                        newsClearAction={newsClearAction}
                    />
                    :
                    <DesktopHome
                        news={news}
                        get_news={get_news}
                        get_news_error={get_news_error}
                        getNewsAction={getNewsAction}
                        clearGetNewsAction={clearGetNewsAction}
                        appendNewsAction={appendNewsAction}
                        newsClearAction={newsClearAction}
                    />
                }
            </Box>
        )
    }
}

export default withRouter<HocInjected, any>(withStyles(styles)(
    connect<IStateProps, IDispatchProps, InjectedProps>(mapStateToProps, mapDispatchToProps)(Home)
))