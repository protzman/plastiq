import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

export default function LivePreview(props) {
  return (
    <div>
      <Typography variant="h4">
        {props.title}
      </Typography>
      {props.title && <Divider />}
      <pre>{JSON.stringify(props.content, null, 2)}</pre>
    </div>
  )
}
