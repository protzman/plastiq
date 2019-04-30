# Cryptocurrency Exploration & Interrogation
A Cryptocurrency application to explore the blockchain and run different analysis on wallets and addresses.

## Setting up local Visual Studio Code environment
In order to have a close development experience between developers, below is an overview of an _ideal_ VS Code setup. In the User Settings found at `Code > Preferences > Settings` ensure the following rules exist
```json
{
  "eslint.autoFixOnSave": true,
  "[javascript]": {
		"editor.formatOnSave": true
	},
  "editor.tabSize": 2,
}
```
as a bare minimum. For a better experience (subjective), there are a few VS Code plugins that make JavaScript development more enjoyable.
- Auto Close Tag
  - obvious use case, but still useful
- Auto Rename Tag
  - obvious use case, but still useful. When renaming a component
  ```js
  <Foobar> {this.props.children} </Foobar>
  ```
  from either the opening or closing tag, it will rename the other appropriately.
- Better Comments
  - allows colored comments to show in your code based on the suffix of a comment declaration. Can use certain comments for different use cases
  ```js
  /**
   * MyMethod (Default Green)
   * * Important information is highlighted (Light Green)
   * ! Deprecated method (Red
   * ? Questions maybe (Blue)
   * TODO: obviously a todo (Orange)
   */
  ```
- Bracket Pair Colorizer
  - Pairs up opening and closing brackets with patching colors and a line joining the two
- ES7 React/Redux/GraphQL/React-Native snippets
  - Snippets for creating quick but common react / etc. things
### Tech Stack
- [x] ReactJs
- [x] NextJs
- [x] Apollo GraphQL
- [x] GraphQL Yoga
- [x] Prisma
