# Sequense (working name)
A helpful tool for creating and maintaining a knowledge base for any topic you wish. Each post you create can be tied to a topic, and then further subdivded by adding tags to it. Find past knowledge you've input by looking through your topics, or filter by tags within a topic to narrow your results.

### Preface
I am creating this mostly as a means to explore new technology to me, as well as a tool, so it may not be 100% professional. I often times go back looking through old code looking for an example of how I did something in another project. This solves that acting as a personal StackOverflow / Medium of sorts. Store code samples with explanations, tutorials or how twos from other parts of your life, potentially even something like recipes. I guess another way to think of this is like a better Google Keep (but not mobile - for now).


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

### Setting up eslint for the project
After the above lines are added to the `User Settings` json file and you have either verify or implement the following
1. The `.eslintrc` file exists in the root of the project. We use the AirBnB conventions.
2. These dependencies exist in the `package.json`
    ```json
    "dependencies": {
      "babel-eslint": "^10.0.1",
      "eslint": "^5.16.0",
    }
    ```
3. These development dependencies exist in the `package.json`
    ```json
    "devDependencies": {  
      "eslint-config-airbnb": "^17.1.0",
      "eslint-plugin-import": "^2.17.2",
      "eslint-plugin-jsx-a11y": "^6.2.1",
      "eslint-plugin-react": "^7.12.4",
    }
    ```


### Plugins for VS Code
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

### Tech stack used in this project
- [x] ReactJs
- [x] NextJs
- [x] Apollo GraphQL
- [x] GraphQL Yoga
- [x] Prisma

## TODO
- [X] Fix font flicker on refresh (nextjs issue)
- [ ] Dockerize the prisma deploy or look for a solution to share configurations across devices
- [ ] Implement eslint across entire application vs frontend and backend separately
