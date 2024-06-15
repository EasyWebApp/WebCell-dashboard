![](https://github.com/EasyWebApp.png)

# WebCell-dashboard

Admin DashBoard scaffold of **WebCell** v3

https://web-cell-dashboard.vercel.app/

[![CI & CD](https://github.com/EasyWebApp/WebCell-dashboard/actions/workflows/main.yml/badge.svg)][1]

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)][2]
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)][3]

## Technology stack

-   Language: [TypeScript v5][4]
-   Component engine: [WebCell v3][5]
-   Component suite: [BootCell v2][6]
-   State management: [MobX v6][7]
-   PWA framework: [Workbox v7][8]
-   Package bundler: [Parcel v2][9]
-   CI / CD: GitHub [Actions][10] + [Pages][11]

## Development

```shell
npm i pnpm -g
pnpm i
npm start
```

## Deployment

```shell
pnpm build
```

## Best practice

1.  Install GitHub apps in your organization or account:

    1.  [Probot settings][12]: set up Issue labels & Pull Request rules
    2.  [PR badge][13]: set up Online [VS Code][14] editor entries in Pull Request description

2.  Click the **[<kbd>Use this template</kbd>][15] button** on the top of this GitHub repository's home page, then create your own repository in the app-installed namespace above

3.  Click the **[<kbd>Open in GitHub codespaces</kbd>][2] button** on the top of ReadMe file, then an **online VS Code development environment** will be started immediately

4.  Set [Vercel variables][16] as [Repository secrets][17], then every commit will get an independent **Preview URL**

5.  Recommend to add a [Notification step in GitHub actions][18] for your Team IM app

6.  Remind the PMs & users of your product to submit **Feature/Enhancement** requests or **Bug** reports with [Issue forms][19] instead of IM messages or Mobile Phone calls

7.  Collect all these issues into [Project kanbans][20], then create **Pull requests** & add `closes #issue_number` into its description for automation

[1]: https://github.com/EasyWebApp/WebCell-dashboard/actions/workflows/main.yml
[2]: https://codespaces.new/EasyWebApp/WebCell-dashboard
[3]: https://gitpod.io/?autostart=true#https://github.com/EasyWebApp/WebCell-dashboard
[4]: https://typescriptlang.org/
[5]: https://web-cell.dev/
[6]: https://bootstrap.web-cell.dev/
[7]: https://mobx.js.org/
[8]: https://developers.google.com/web/tools/workbox
[9]: https://parceljs.org/
[10]: https://github.com/features/actions
[11]: https://pages.github.com/
[12]: https://github.com/apps/settings
[13]: https://pullrequestbadge.com/
[14]: https://code.visualstudio.com/
[15]: https://github.com/new?template_name=WebCell-dashboard&template_owner=EasyWebApp
[16]: https://github.com/idea2app/Next-Bootstrap-ts/blob/80967ed49045af9dbcf4d3695a2c39d53a6f71f1/.github/workflows/pull-request.yml#L9-L12
[17]: https://github.com/EasyWebApp/WebCell-dashboard/settings/secrets/actions
[18]: https://github.com/kaiyuanshe/kaiyuanshe.github.io/blob/bb4675a56bf1d6b207231313da5ed0af7cf0ebd6/.github/workflows/pull-request.yml#L32-L56
[19]: https://github.com/EasyWebApp/WebCell-dashboard/issues/new/choose
[20]: https://github.com/EasyWebApp/WebCell-dashboard/projects
