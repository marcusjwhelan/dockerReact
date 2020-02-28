import React, {Component, Suspense, lazy} from 'react'
import {createStyles, Theme, WithStyles} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import {Loading} from '../../components/Loading'
// @ts-ignore
// import MassiveLoop_TitleGraphic_NeutronDesign_4_Beta from '../../assets/massiveloop/MassiveLoop_TitleGraphic_NeutronDesign_4_Beta.jpg'
import MassiveLoop_TitleGraphic_NeutronDesign_4_Beta from '../../assets/massiveloop/MassiveLoop_Beta_Square_350x350_20kb.jpg'
// @ts-ignore
// import Stratoscape_Oculus_Square_3_VSCO from '../../assets/stratoscape/Stratoscape_Oculus_Square_3_VSCO.jpg'
import Stratoscape_Oculus_Square_3_VSCO from '../../assets/stratoscape/Stratoscape_Square_350x350_20kb.jpg'
import {IGetNewsResp, INews} from '../../models/responseObjects'
import {TappendNewsAction, TclearGetNewsAction, TgetNewsAction, TnewsClearAction} from '../../actions/news'
const GameCard = lazy(() => import('../../components/GameCard'))

const styles = (_theme: Theme) => createStyles({
    ContainerRoot: {
        height: '100%',
        paddingLeft: '1rem',
        paddingRight: '2rem',
        maxWidth: 1600,
        paddingTop: 24
    },
    WelcomePanelHeader: {
        marginRight: '1rem',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        borderTopRightRadius: '8px',
        borderTopLeftRadius: '8px'
    },
    WelcomePanelContent: {
        marginRight: '1rem',
        paddingTop: '1rem',
        paddingBottom: '1.5rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        borderBottomRightRadius: '8px',
        borderBottomLeftRadius: '8px'
    },
    GameCardContent: {
        paddingTop: '.5rem'
    },
    WelcomeDivider: {
        marginRight: '1rem'
    },
    NewsAndUpdatesPanelHeader: {
        paddingTop: '1rem',
        paddingBottom: '1rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        maxWidth: 310,
        borderTopRightRadius: '8px',
        borderTopLeftRadius: '8px'
    },
    NewsAndUpdatesPanelContent: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: '1rem',
        maxWidth: 310,
        borderBottomRightRadius: '8px',
        borderBottomLeftRadius: '8px'
    },
    newsList: {
        maxHeight: '100vh',
        overflow: 'auto'
    }
})

interface InjectedProps extends WithStyles<typeof styles> {
    // values
    news: INews[] | null
    get_news: IGetNewsResp | null
    get_news_error: string | null
    // methods
    appendNewsAction: TappendNewsAction
    getNewsAction: TgetNewsAction
    clearGetNewsAction: TclearGetNewsAction
    newsClearAction: TnewsClearAction
}

type HomeProps = InjectedProps

class DesktopHome extends Component<HomeProps, {}> {
    constructor(props: HomeProps) {
        super(props)
    }

    public render() {
        const {classes} = this.props
        return (
            <Container classes={{root: classes.ContainerRoot}}>
                <Box display={'flex'} pb={8}>
                    <Box  flexGrow={1}
                          display={'flex'}
                          flexDirection={'column'}
                          justifyContent={'flex-start'}
                    >
                        <Box display={'flex'}
                             flexDirection={'row'}
                             bgcolor={'grey.800'}
                             boxShadow={2}
                             className={classes.WelcomePanelHeader}
                             alignItems={'center'}
                        >
                            <Typography variant={'h5'}>
                                Welcome To HumanMode.net
                            </Typography>
                        </Box>
                        <Divider className={classes.WelcomeDivider} />
                        <Box bgcolor={'grey.800'}
                             boxShadow={2}
                             className={classes.WelcomePanelContent}
                        >
                            <List disablePadding={true}>
                                <ListItem>
                                    <ListItemText
                                        primary={`Join today and start playing and creating in your own world`}
                                        secondary={'Manage your account and games with more coming soon'}
                                    />
                                </ListItem>
                                <ListItem>
                                    <Suspense fallback={<Loading/>}>
                                        <GameCard
                                            cardImage={MassiveLoop_TitleGraphic_NeutronDesign_4_Beta}
                                            cardHeading={'Massive Loop'}
                                            cardDetails={[
                                                {
                                                    value: 'Massive Loop',
                                                    divider: true,
                                                    variant: 'h6',
                                                    component: 'h6'
                                                },
                                                {
                                                    value: 'Content Creation & Testing Platform',
                                                    divider: false,
                                                    variant: 'caption',
                                                    wrapperDivClassName: classes.GameCardContent
                                                },
                                                {
                                                    value: 'Create your own rooms, share your creations, and script objects into action with friends and coworkers.',
                                                    divider: false,
                                                    variant: 'caption'
                                                }
                                            ]}
                                        />
                                    </Suspense>
                                </ListItem>
                                <ListItem>
                                    <Suspense fallback={<Loading/>}>
                                        <GameCard
                                            cardImage={Stratoscape_Oculus_Square_3_VSCO}
                                            cardHeading={'Stratoscape'}
                                            link={'https://store.steampowered.com/app/1143130/Stratoscape/'}
                                            linkName={'Buy Now'}
                                            cardDetails={[
                                                {
                                                    value: 'Stratoscape',
                                                    divider: true,
                                                    variant: 'h6',
                                                    component: 'h6'
                                                },
                                                {
                                                    value: 'Single Player FPS',
                                                    divider: false,
                                                    variant: 'caption',
                                                    wrapperDivClassName: classes.GameCardContent
                                                },
                                                {
                                                    value: 'Fight your way through monster and robot waves to beat the final boss',
                                                    divider: false,
                                                    variant: 'caption'
                                                }
                                            ]}
                                        />
                                    </Suspense>
                                </ListItem>
                            </List>
                        </Box>
                    </Box>
                    <Box display={'flex'}
                         flexDirection={'column'}
                         justifyContent={'flex-start'}>
                        <iframe
                            src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhumanmodetech&tabs=timeline&width=340&height=${window.innerHeight}&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
                            width="340" height={window.innerHeight} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder="0"
                             allow="encrypted-media"/>
                    </Box>
                </Box>
            </Container>
        )
    }
}

export default withStyles(styles)(DesktopHome)