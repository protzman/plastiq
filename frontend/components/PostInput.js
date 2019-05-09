import React from 'react'
import Draft from 'draft-js'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'
import FormatULIcon from '@material-ui/icons/FormatListBulleted'
import FormatOLIcon from '@material-ui/icons/FormatListNumbered'
import CodeIcon from '@material-ui/icons/Code'
import BoldIcon from '@material-ui/icons/FormatBold'
import ItalicIcon from '@material-ui/icons/FormatItalic'
import UnderlineIcon from '@material-ui/icons/FormatUnderlined'
import SpaceBarIcon from '@material-ui/icons/SpaceBar'

const {
  Editor, EditorState, RichUtils, getDefaultKeyBinding
} = Draft

export default class RichEditorExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editorState: EditorState.createEmpty() }
    this.focus = () => this.refs.editor.focus()
    this.onChange = (editorState) => {
      this.setState({ editorState }, () => {
        this.props.setContent(editorState.getCurrentContent())
      })
    }
    this.handleKeyCommand = this._handleKeyCommand.bind(this)
    this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this)
    this.toggleBlockType = this._toggleBlockType.bind(this)
    this.toggleInlineStyle = this._toggleInlineStyle.bind(this)
  }

  _handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      this.onChange(newState)
      return true
    }
    return false
  }

  _mapKeyToEditorCommand(e) {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(
        e,
        this.state.editorState,
        4 /* maxDepth */
      )
      if (newEditorState !== this.state.editorState) {
        this.onChange(newEditorState)
      }
      return
    }
    return getDefaultKeyBinding(e)
  }

  _toggleBlockType(blockType) {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType))
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    )
  }

  render() {
    const { editorState } = this.state
    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = 'RichEditor-editor'
    const contentState = editorState.getCurrentContent()
    if (!contentState.hasText()) {
      if (
        contentState
          .getBlockMap()
          .first()
          .getType() !== 'unstyled'
      ) {
        className += ' RichEditor-hidePlaceholder'
      }
    }
    return (
      <div>
        <div className="RichEditor-controls">
          <StyleControls
            editorState={editorState}
            onToggleBlock={this.toggleBlockType}
            onToggleInline={this.toggleInlineStyle}
          />
        </div>
        <div className="RichEditor-root">
          <div className={className} onClick={this.focus}>
            <Editor
              blockStyleFn={getBlockStyle}
              customStyleMap={styleMap}
              editorState={editorState}
              handleKeyCommand={this.handleKeyCommand}
              keyBindingFn={this.mapKeyToEditorCommand}
              onChange={this.onChange}
              ref="editor"
              spellCheck
            />
          </div>
        </div>
      </div>
    )
  }
}
// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2
  }
}
function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote':
      return 'RichEditor-blockquote'
    default:
      return null
  }
}
class StyleButton extends React.Component {
  constructor() {
    super()
    this.onToggle = (e) => {
      e.preventDefault()
      this.props.onToggle(this.props.style)
    }
  }

  renderButton(label) {
    switch (label) {
      case 'Blockquote':
        return <FormatQuoteIcon />
      case 'UL':
        return <FormatULIcon />
      case 'OL':
        return <FormatOLIcon />
      case 'Code Block':
        return <CodeIcon />
      case 'Bold':
        return <BoldIcon />
      case 'Italic':
        return <ItalicIcon />
      case 'Underline':
        return <UnderlineIcon />
      case 'Monospace':
        return <SpaceBarIcon />
      default:
        return label
    }
  }

  render() {
    let className = 'RichEditor-styleButton'
    if (this.props.active) {
      className += ' RichEditor-activeButton'
    }
    return (
      <Button className={className} size="small" onMouseDown={this.onToggle}>
        {this.renderButton(this.props.label)}
      </Button>
    )
  }
}
const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
  { label: 'Blockquote', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
  { label: 'Code Block', style: 'code-block' }
]

const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' }
]
const StyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle()
  const { editorState } = props
  const selection = editorState.getSelection()
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType()
  return (
    <div className="RichEditor-root">
      {BLOCK_TYPES.map(type => (
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggleBlock}
          style={type.style}
        />
      ))}
      {INLINE_STYLES.map(type => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggleInline}
          style={type.style}
        />
      ))}
    </div>
  )
}
