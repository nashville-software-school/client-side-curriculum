# Installations

## Visual Studio Code

Visit the <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a> website to download and install the code editor. This is the editor you will be using for the next 6 months.

### Extensions

Once Visual Studio Code is installed, there are several extensions that will be helpful for you as a beginner. Click on the links below to visit each extension page and click the **Install** button for each one.

* <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank" rel="noopener noreferrer">Prettier Code Formatter</a>
* <a href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag" target="_blank" rel="noopener noreferrer">Auto close tag</a>
* <a href="https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare" target="_blank" rel="noopener noreferrer">Live share</a>
* <a href="https://marketplace.visualstudio.com/items?itemName=Cardinal90.multi-cursor-case-preserve" target="_blank" rel="noopener noreferrer">Multiple cursor case preserve</a>
* <a href="https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker" target="_blank" rel="noopener noreferrer">Code spell checker</a>

## Git Bash (i.e. the terminal)

Later in the instructions, we will ask you to type a command into your terminal. For Windows, this is the **Git Bash** application.

Visit the <a href="http://www.git-scm.com/downloads" target="_blank" rel="noopener noreferrer">Git Bash</a> download page click the "Download for Windows" button, and once complete, install the software.

## Windows Terminal

Visit the <a href="https://apps.microsoft.com/detail/9N0DX20HK701?cid=msft_web_chart&activetab=pivot%3Aoverviewtab&hl=en-us&gl=US" target="_blank" rel="noopener noreferrer">Windows Terminal</a> download page and open it in the Microsoft Store App. This will be your default terminal which you will use to navigate your file system, and run development tools throughout the course.

Once Windows Terminal is installed:

1. Go to the `Start` menu (Windows key)
2. Search for `Windows Terminal`
3. Open `Windows Terminal`
4. By default, this will open a new PowerShell terminal window. _Do **not** use the PowerShell terminal window._
5. Click the down arrow <kbd>﹀</kbd> located at the top of the terminal window.
6. Select **Git Bash** from the dropdown menu to start a new **Git Bash** terminal window.

>##### _NOTE: **Always** use Git Bash, not PowerShell._

## Node

Visit the <a href="https://www.nodejs.org" target="_blank" rel="noopener noreferrer">Node.js</a> site and click on the install button that has **"LTS"** in it. Once you download the software, install it, accepting all of the defaults along the way.

## Node Packages - Web and API Servers

1. Open Windows Terminal Preview and start a new **Git Bash** terminal window.
1. Run the following command in the terminal to install both `serve` and `json-server`:
    ```sh
    npm i -g serve json-server@0.17.4
    ```

## Configuring Git

> ##### _NOTE: This step requires your GitHub username and email._
> ##### _If you have not yet registered for a [GitHub](#github) account, do that first._

Watch the video on how to <a href="https://youtu.be/66EB9oxGMzQ" target="_blank" rel="noopener noreferrer">set up global Git configuration</a> using your GitHub username and the email address associated with your GitHub account. This will allow you to successfully back up your code to GitHub in a few days... once we show you how to do it.

## SSH Key

SSH is a technology that allows you to create a very secure connection between your computer, and a computer located somewhere else in the world. It's an acronym for Secure SHell. When you create an SSH key on your computer, it actually creates two files:

1. A public key file that you share with other people and computers. It is usually named `id_rsa.pub`.
1. A private key file that you never, ever, ever, ever, ever share with anyone. It is usually named `id_rsa`.

## Creating Your SSH Key

Watch a short video for <a href="https://youtu.be/znRMcNG9_qQ" target="_blank" rel="noopener noreferrer">creating an SSH key in the terminal</a> so that you an work with GitHub.

## Add SSH Key to GitHub Account

Now watch the video for <a href="https://youtu.be/8hlmIObpMd4" target="_blank" rel="noopener noreferrer">adding your SSH key to your GitHub account</a>.
