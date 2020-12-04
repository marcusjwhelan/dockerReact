import React from 'react'
import {createStyles, Theme, WithStyles} from '@material-ui/core'
import Snackbar from '@material-ui/core/Snackbar'
import CustomSnackbar from './CustomSnackbar'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = (_theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    zIndex: 1400
  }
})

type Tvertical = 'top' | 'bottom'
type Thorizontal = 'left' | 'right' | 'center'

interface InjectedProps extends WithStyles<typeof styles> {
  snackBarWaitTime: number
  horizontal: Thorizontal
  vertical: Tvertical
  success: boolean
  info: boolean
  warning: boolean
  error: boolean
  successMessage: string
  infoMessage: string
  warningMessage: string
  errorMessage: string
  closeSnackbar: (type: string, reason?: string) => void
}
function ErrorHandlerBasic(props: InjectedProps) {
  const _success = 'success'
  const _warning = 'warning'
  const _info = 'info'
  const _error = 'error'
  const {classes} = props
  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{
          vertical: props.vertical,
          horizontal: props.horizontal
        }}
        open={props.success}
        onClose={(_e: any, reason: string) => {
          props.closeSnackbar(_success, reason)
        }}
        autoHideDuration={props.snackBarWaitTime}
      >
        <CustomSnackbar
          variant={_success}
          onClose={() => props.closeSnackbar(_success)}
          message={props.successMessage}
        />
      </Snackbar>
      <Snackbar
        anchorOrigin={{
          vertical: props.vertical,
          horizontal: props.horizontal
        }}
        open={props.info}
        onClose={(_e: any, reason: string) => {
          props.closeSnackbar(_info, reason)
        }}
        autoHideDuration={props.snackBarWaitTime}
      >
        <CustomSnackbar
          variant={_info}
          onClose={() => props.closeSnackbar(_info)}
          message={props.infoMessage}
        />
      </Snackbar>
      <Snackbar
        anchorOrigin={{
          vertical: props.vertical,
          horizontal: props.horizontal
        }}
        open={props.warning}
        autoHideDuration={props.snackBarWaitTime}
        onClose={(_e: any, reason: string) => {
          props.closeSnackbar(_warning, reason)
        }}
      >
        <CustomSnackbar
          variant={_warning}
          onClose={() => props.closeSnackbar(_warning)}
          message={props.warningMessage}
        />
      </Snackbar>
      <Snackbar
        anchorOrigin={{
          vertical: props.vertical,
          horizontal: props.horizontal
        }}
        open={props.error}
        autoHideDuration={props.snackBarWaitTime}
        onClose={(_e: any, reason: string) => {
          props.closeSnackbar(_error, reason)
        }}
      >
        <CustomSnackbar
          variant={_error}
          onClose={() => props.closeSnackbar(_error)}
          message={props.errorMessage}
        />
      </Snackbar>
    </div>
  )
}
export default withStyles(styles)(ErrorHandlerBasic)