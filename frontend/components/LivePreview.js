import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

function mapBlockToText(block) {
  return <div>{block}</div>
}

export default function LivePreview(props) {
  return (
    <div>
      <Typography variant="h4">
        {props.title}
      </Typography>
      {props.title && <Divider />}
      {props.content && props.content.map(block => (
        mapBlockToText(block.text.toString())
      ))}
      <div>
        <pre>{JSON.stringify(props.content, null, 2)}</pre>
      </div>
    </div>
  )
}
