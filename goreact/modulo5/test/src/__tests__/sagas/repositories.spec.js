import { runSaga } from "redux-saga";
import { getRepositories } from "../../store/sagas/repositories";
import { Creators as RepositoriesActions } from "../../store/ducks/repositories";

const response = [
  {
    id: 130243828,
    node_id: "MDEwOlJlcG9zaXRvcnkxMzAyNDM4Mjg=",
    name: "3rd-party-with-react",
    full_name: "tgmarinho/3rd-party-with-react",
    private: false,
    owner: {
      login: "tgmarinho",
      id: 380327,
      node_id: "MDQ6VXNlcjM4MDMyNw==",
      avatar_url: "https://avatars2.githubusercontent.com/u/380327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tgmarinho",
      html_url: "https://github.com/tgmarinho",
      followers_url: "https://api.github.com/users/tgmarinho/followers",
      following_url:
        "https://api.github.com/users/tgmarinho/following{/other_user}",
      gists_url: "https://api.github.com/users/tgmarinho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tgmarinho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tgmarinho/subscriptions",
      organizations_url: "https://api.github.com/users/tgmarinho/orgs",
      repos_url: "https://api.github.com/users/tgmarinho/repos",
      events_url: "https://api.github.com/users/tgmarinho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tgmarinho/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/tgmarinho/3rd-party-with-react",
    description:
      "trabalhando com libs de terceiros junto com React -- manipulação de DOM no último caso usando ref em classes / componente statefull",
    fork: false,
    url: "https://api.github.com/repos/tgmarinho/3rd-party-with-react",
    forks_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/forks",
    keys_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/teams",
    hooks_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/hooks",
    issue_events_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/events",
    assignees_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/tags",
    blobs_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/languages",
    stargazers_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/stargazers",
    contributors_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/contributors",
    subscribers_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/subscribers",
    subscription_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/subscription",
    commits_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/merges",
    archive_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/downloads",
    issues_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/labels{/name}",
    releases_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/tgmarinho/3rd-party-with-react/deployments",
    created_at: "2018-04-19T16:31:18Z",
    updated_at: "2018-04-19T16:32:40Z",
    pushed_at: "2018-04-19T16:32:39Z",
    git_url: "git://github.com/tgmarinho/3rd-party-with-react.git",
    ssh_url: "git@github.com:tgmarinho/3rd-party-with-react.git",
    clone_url: "https://github.com/tgmarinho/3rd-party-with-react.git",
    svn_url: "https://github.com/tgmarinho/3rd-party-with-react",
    homepage: null,
    size: 48,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 94827790,
    node_id: "MDEwOlJlcG9zaXRvcnk5NDgyNzc5MA==",
    name: "AdminBSBMaterialDesign",
    full_name: "tgmarinho/AdminBSBMaterialDesign",
    private: false,
    owner: {
      login: "tgmarinho",
      id: 380327,
      node_id: "MDQ6VXNlcjM4MDMyNw==",
      avatar_url: "https://avatars2.githubusercontent.com/u/380327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tgmarinho",
      html_url: "https://github.com/tgmarinho",
      followers_url: "https://api.github.com/users/tgmarinho/followers",
      following_url:
        "https://api.github.com/users/tgmarinho/following{/other_user}",
      gists_url: "https://api.github.com/users/tgmarinho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tgmarinho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tgmarinho/subscriptions",
      organizations_url: "https://api.github.com/users/tgmarinho/orgs",
      repos_url: "https://api.github.com/users/tgmarinho/repos",
      events_url: "https://api.github.com/users/tgmarinho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tgmarinho/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/tgmarinho/AdminBSBMaterialDesign",
    description:
      "AdminBSB - Free admin panel that is based on Bootstrap 3.x with Material Design",
    fork: true,
    url: "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign",
    forks_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/forks",
    keys_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/teams",
    hooks_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/hooks",
    issue_events_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/events",
    assignees_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/tags",
    blobs_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/languages",
    stargazers_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/stargazers",
    contributors_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/contributors",
    subscribers_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/subscribers",
    subscription_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/subscription",
    commits_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/merges",
    archive_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/downloads",
    issues_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/labels{/name}",
    releases_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/tgmarinho/AdminBSBMaterialDesign/deployments",
    created_at: "2017-06-19T22:57:21Z",
    updated_at: "2017-06-19T22:57:25Z",
    pushed_at: "2017-06-13T21:02:52Z",
    git_url: "git://github.com/tgmarinho/AdminBSBMaterialDesign.git",
    ssh_url: "git@github.com:tgmarinho/AdminBSBMaterialDesign.git",
    clone_url: "https://github.com/tgmarinho/AdminBSBMaterialDesign.git",
    svn_url: "https://github.com/tgmarinho/AdminBSBMaterialDesign",
    homepage: "https://gurayyarar.github.io/AdminBSBMaterialDesign",
    size: 23785,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "other",
      name: "Other",
      spdx_id: "NOASSERTION",
      url: null,
      node_id: "MDc6TGljZW5zZTA="
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 97754437,
    node_id: "MDEwOlJlcG9zaXRvcnk5Nzc1NDQzNw==",
    name: "AlgaMoney",
    full_name: "tgmarinho/AlgaMoney",
    private: false,
    owner: {
      login: "tgmarinho",
      id: 380327,
      node_id: "MDQ6VXNlcjM4MDMyNw==",
      avatar_url: "https://avatars2.githubusercontent.com/u/380327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tgmarinho",
      html_url: "https://github.com/tgmarinho",
      followers_url: "https://api.github.com/users/tgmarinho/followers",
      following_url:
        "https://api.github.com/users/tgmarinho/following{/other_user}",
      gists_url: "https://api.github.com/users/tgmarinho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tgmarinho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tgmarinho/subscriptions",
      organizations_url: "https://api.github.com/users/tgmarinho/orgs",
      repos_url: "https://api.github.com/users/tgmarinho/repos",
      events_url: "https://api.github.com/users/tgmarinho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tgmarinho/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/tgmarinho/AlgaMoney",
    description:
      "Código do Curso da Algaworks -> API Spring Boot e Client Angular",
    fork: false,
    url: "https://api.github.com/repos/tgmarinho/AlgaMoney",
    forks_url: "https://api.github.com/repos/tgmarinho/AlgaMoney/forks",
    keys_url: "https://api.github.com/repos/tgmarinho/AlgaMoney/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tgmarinho/AlgaMoney/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/tgmarinho/AlgaMoney/teams",
    hooks_url: "https://api.github.com/repos/tgmarinho/AlgaMoney/hooks",
    issue_events_url:
      "https://api.github.com/repos/tgmarinho/AlgaMoney/issues/events{/number}",
    events_url: "https://api.github.com/repos/tgmarinho/AlgaMoney/events",
    assignees_url:
      "https://api.github.com/repos/tgmarinho/AlgaMoney/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tgmarinho/AlgaMoney/branches{/branch}",
    tags_url: "https://api.github.com/repos/tgmarinho/AlgaMoney/tags",
    blobs_url:
      "https://api.github.com/repos/tgmarinho/AlgaMoney/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/tgmarinho/AlgaMoney/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/tgmarinho/AlgaMoney/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/tgmarinho/AlgaMoney/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/tgmarinho/AlgaMoney/statuses/{sha}",
    languages_url: "https://api.github.com/repos/tgmarinho/AlgaMoney/languages",
    stargazers_url:
      "https://api.github.com/repos/tgmarinho/AlgaMoney/stargazers",
    contributors_url:
      "https://api.github.com/repos/tgmarinho/AlgaMoney/contributors",
    subscribers_url:
      "https://api.github.com/repos/tgmarinho/AlgaMoney/subscribers",
    subscription_url:
      "https://api.github.com/repos/tgmarinho/AlgaMoney/subscription",
    commits_url:
      "https://api.github.com/repos/tgmarinho/AlgaMoney/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tgmarinho/AlgaMoney/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tgmarinho/AlgaMoney/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tgmarinho/AlgaMoney/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tgmarinho/AlgaMoney/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tgmarinho/AlgaMoney/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/tgmarinho/AlgaMoney/merges",
    archive_url:
      "https://api.github.com/repos/tgmarinho/AlgaMoney/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/tgmarinho/AlgaMoney/downloads",
    issues_url:
      "https://api.github.com/repos/tgmarinho/AlgaMoney/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/tgmarinho/AlgaMoney/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tgmarinho/AlgaMoney/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tgmarinho/AlgaMoney/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/tgmarinho/AlgaMoney/labels{/name}",
    releases_url:
      "https://api.github.com/repos/tgmarinho/AlgaMoney/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/tgmarinho/AlgaMoney/deployments",
    created_at: "2017-07-19T19:39:28Z",
    updated_at: "2017-07-21T13:33:33Z",
    pushed_at: "2017-09-16T01:12:18Z",
    git_url: "git://github.com/tgmarinho/AlgaMoney.git",
    ssh_url: "git@github.com:tgmarinho/AlgaMoney.git",
    clone_url: "https://github.com/tgmarinho/AlgaMoney.git",
    svn_url: "https://github.com/tgmarinho/AlgaMoney",
    homepage: null,
    size: 80,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Java",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 128101357,
    node_id: "MDEwOlJlcG9zaXRvcnkxMjgxMDEzNTc=",
    name: "algorithms.js",
    full_name: "tgmarinho/algorithms.js",
    private: false,
    owner: {
      login: "tgmarinho",
      id: 380327,
      node_id: "MDQ6VXNlcjM4MDMyNw==",
      avatar_url: "https://avatars2.githubusercontent.com/u/380327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tgmarinho",
      html_url: "https://github.com/tgmarinho",
      followers_url: "https://api.github.com/users/tgmarinho/followers",
      following_url:
        "https://api.github.com/users/tgmarinho/following{/other_user}",
      gists_url: "https://api.github.com/users/tgmarinho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tgmarinho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tgmarinho/subscriptions",
      organizations_url: "https://api.github.com/users/tgmarinho/orgs",
      repos_url: "https://api.github.com/users/tgmarinho/repos",
      events_url: "https://api.github.com/users/tgmarinho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tgmarinho/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/tgmarinho/algorithms.js",
    description:
      "Atwood's Law applied to CS101 - Classic algorithms and data structures implemented in JavaScript",
    fork: true,
    url: "https://api.github.com/repos/tgmarinho/algorithms.js",
    forks_url: "https://api.github.com/repos/tgmarinho/algorithms.js/forks",
    keys_url:
      "https://api.github.com/repos/tgmarinho/algorithms.js/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tgmarinho/algorithms.js/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/tgmarinho/algorithms.js/teams",
    hooks_url: "https://api.github.com/repos/tgmarinho/algorithms.js/hooks",
    issue_events_url:
      "https://api.github.com/repos/tgmarinho/algorithms.js/issues/events{/number}",
    events_url: "https://api.github.com/repos/tgmarinho/algorithms.js/events",
    assignees_url:
      "https://api.github.com/repos/tgmarinho/algorithms.js/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tgmarinho/algorithms.js/branches{/branch}",
    tags_url: "https://api.github.com/repos/tgmarinho/algorithms.js/tags",
    blobs_url:
      "https://api.github.com/repos/tgmarinho/algorithms.js/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/tgmarinho/algorithms.js/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/tgmarinho/algorithms.js/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/tgmarinho/algorithms.js/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/tgmarinho/algorithms.js/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/tgmarinho/algorithms.js/languages",
    stargazers_url:
      "https://api.github.com/repos/tgmarinho/algorithms.js/stargazers",
    contributors_url:
      "https://api.github.com/repos/tgmarinho/algorithms.js/contributors",
    subscribers_url:
      "https://api.github.com/repos/tgmarinho/algorithms.js/subscribers",
    subscription_url:
      "https://api.github.com/repos/tgmarinho/algorithms.js/subscription",
    commits_url:
      "https://api.github.com/repos/tgmarinho/algorithms.js/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tgmarinho/algorithms.js/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tgmarinho/algorithms.js/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tgmarinho/algorithms.js/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tgmarinho/algorithms.js/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tgmarinho/algorithms.js/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/tgmarinho/algorithms.js/merges",
    archive_url:
      "https://api.github.com/repos/tgmarinho/algorithms.js/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/tgmarinho/algorithms.js/downloads",
    issues_url:
      "https://api.github.com/repos/tgmarinho/algorithms.js/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/tgmarinho/algorithms.js/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tgmarinho/algorithms.js/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tgmarinho/algorithms.js/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/tgmarinho/algorithms.js/labels{/name}",
    releases_url:
      "https://api.github.com/repos/tgmarinho/algorithms.js/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/tgmarinho/algorithms.js/deployments",
    created_at: "2018-04-04T18:06:15Z",
    updated_at: "2018-04-04T18:06:17Z",
    pushed_at: "2018-02-21T10:34:10Z",
    git_url: "git://github.com/tgmarinho/algorithms.js.git",
    ssh_url: "git@github.com:tgmarinho/algorithms.js.git",
    clone_url: "https://github.com/tgmarinho/algorithms.js.git",
    svn_url: "https://github.com/tgmarinho/algorithms.js",
    homepage: "http://felipernb.github.io/algorithms.js",
    size: 765,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 98589387,
    node_id: "MDEwOlJlcG9zaXRvcnk5ODU4OTM4Nw==",
    name: "Alurinha-CSS-FlexBox",
    full_name: "tgmarinho/Alurinha-CSS-FlexBox",
    private: false,
    owner: {
      login: "tgmarinho",
      id: 380327,
      node_id: "MDQ6VXNlcjM4MDMyNw==",
      avatar_url: "https://avatars2.githubusercontent.com/u/380327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tgmarinho",
      html_url: "https://github.com/tgmarinho",
      followers_url: "https://api.github.com/users/tgmarinho/followers",
      following_url:
        "https://api.github.com/users/tgmarinho/following{/other_user}",
      gists_url: "https://api.github.com/users/tgmarinho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tgmarinho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tgmarinho/subscriptions",
      organizations_url: "https://api.github.com/users/tgmarinho/orgs",
      repos_url: "https://api.github.com/users/tgmarinho/repos",
      events_url: "https://api.github.com/users/tgmarinho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tgmarinho/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/tgmarinho/Alurinha-CSS-FlexBox",
    description: "Curso de CSS com FlexBox - Projeto Alurinha",
    fork: false,
    url: "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox",
    forks_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/forks",
    keys_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/teams",
    hooks_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/hooks",
    issue_events_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/events",
    assignees_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/tags",
    blobs_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/languages",
    stargazers_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/stargazers",
    contributors_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/contributors",
    subscribers_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/subscribers",
    subscription_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/subscription",
    commits_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/merges",
    archive_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/downloads",
    issues_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/labels{/name}",
    releases_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/tgmarinho/Alurinha-CSS-FlexBox/deployments",
    created_at: "2017-07-28T00:08:37Z",
    updated_at: "2017-07-28T00:57:39Z",
    pushed_at: "2017-07-28T03:24:12Z",
    git_url: "git://github.com/tgmarinho/Alurinha-CSS-FlexBox.git",
    ssh_url: "git@github.com:tgmarinho/Alurinha-CSS-FlexBox.git",
    clone_url: "https://github.com/tgmarinho/Alurinha-CSS-FlexBox.git",
    svn_url: "https://github.com/tgmarinho/Alurinha-CSS-FlexBox",
    homepage: null,
    size: 318,
    stargazers_count: 0,
    watchers_count: 0,
    language: "CSS",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 8510347,
    node_id: "MDEwOlJlcG9zaXRvcnk4NTEwMzQ3",
    name: "AndEngine",
    full_name: "tgmarinho/AndEngine",
    private: false,
    owner: {
      login: "tgmarinho",
      id: 380327,
      node_id: "MDQ6VXNlcjM4MDMyNw==",
      avatar_url: "https://avatars2.githubusercontent.com/u/380327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tgmarinho",
      html_url: "https://github.com/tgmarinho",
      followers_url: "https://api.github.com/users/tgmarinho/followers",
      following_url:
        "https://api.github.com/users/tgmarinho/following{/other_user}",
      gists_url: "https://api.github.com/users/tgmarinho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tgmarinho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tgmarinho/subscriptions",
      organizations_url: "https://api.github.com/users/tgmarinho/orgs",
      repos_url: "https://api.github.com/users/tgmarinho/repos",
      events_url: "https://api.github.com/users/tgmarinho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tgmarinho/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/tgmarinho/AndEngine",
    description: "Free Android 2D OpenGL Game Engine",
    fork: true,
    url: "https://api.github.com/repos/tgmarinho/AndEngine",
    forks_url: "https://api.github.com/repos/tgmarinho/AndEngine/forks",
    keys_url: "https://api.github.com/repos/tgmarinho/AndEngine/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tgmarinho/AndEngine/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/tgmarinho/AndEngine/teams",
    hooks_url: "https://api.github.com/repos/tgmarinho/AndEngine/hooks",
    issue_events_url:
      "https://api.github.com/repos/tgmarinho/AndEngine/issues/events{/number}",
    events_url: "https://api.github.com/repos/tgmarinho/AndEngine/events",
    assignees_url:
      "https://api.github.com/repos/tgmarinho/AndEngine/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tgmarinho/AndEngine/branches{/branch}",
    tags_url: "https://api.github.com/repos/tgmarinho/AndEngine/tags",
    blobs_url:
      "https://api.github.com/repos/tgmarinho/AndEngine/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/tgmarinho/AndEngine/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/tgmarinho/AndEngine/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/tgmarinho/AndEngine/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/tgmarinho/AndEngine/statuses/{sha}",
    languages_url: "https://api.github.com/repos/tgmarinho/AndEngine/languages",
    stargazers_url:
      "https://api.github.com/repos/tgmarinho/AndEngine/stargazers",
    contributors_url:
      "https://api.github.com/repos/tgmarinho/AndEngine/contributors",
    subscribers_url:
      "https://api.github.com/repos/tgmarinho/AndEngine/subscribers",
    subscription_url:
      "https://api.github.com/repos/tgmarinho/AndEngine/subscription",
    commits_url:
      "https://api.github.com/repos/tgmarinho/AndEngine/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tgmarinho/AndEngine/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tgmarinho/AndEngine/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tgmarinho/AndEngine/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tgmarinho/AndEngine/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tgmarinho/AndEngine/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/tgmarinho/AndEngine/merges",
    archive_url:
      "https://api.github.com/repos/tgmarinho/AndEngine/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/tgmarinho/AndEngine/downloads",
    issues_url:
      "https://api.github.com/repos/tgmarinho/AndEngine/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/tgmarinho/AndEngine/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tgmarinho/AndEngine/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tgmarinho/AndEngine/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/tgmarinho/AndEngine/labels{/name}",
    releases_url:
      "https://api.github.com/repos/tgmarinho/AndEngine/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/tgmarinho/AndEngine/deployments",
    created_at: "2013-03-01T21:09:12Z",
    updated_at: "2013-03-01T21:09:12Z",
    pushed_at: "2013-02-19T07:46:42Z",
    git_url: "git://github.com/tgmarinho/AndEngine.git",
    ssh_url: "git@github.com:tgmarinho/AndEngine.git",
    clone_url: "https://github.com/tgmarinho/AndEngine.git",
    svn_url: "https://github.com/tgmarinho/AndEngine",
    homepage: "http://www.andengine.org",
    size: 8788,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Java",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "GLES2"
  },
  {
    id: 131222183,
    node_id: "MDEwOlJlcG9zaXRvcnkxMzEyMjIxODM=",
    name: "anki",
    full_name: "tgmarinho/anki",
    private: false,
    owner: {
      login: "tgmarinho",
      id: 380327,
      node_id: "MDQ6VXNlcjM4MDMyNw==",
      avatar_url: "https://avatars2.githubusercontent.com/u/380327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tgmarinho",
      html_url: "https://github.com/tgmarinho",
      followers_url: "https://api.github.com/users/tgmarinho/followers",
      following_url:
        "https://api.github.com/users/tgmarinho/following{/other_user}",
      gists_url: "https://api.github.com/users/tgmarinho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tgmarinho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tgmarinho/subscriptions",
      organizations_url: "https://api.github.com/users/tgmarinho/orgs",
      repos_url: "https://api.github.com/users/tgmarinho/repos",
      events_url: "https://api.github.com/users/tgmarinho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tgmarinho/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/tgmarinho/anki",
    description: "Anki for desktop computers",
    fork: true,
    url: "https://api.github.com/repos/tgmarinho/anki",
    forks_url: "https://api.github.com/repos/tgmarinho/anki/forks",
    keys_url: "https://api.github.com/repos/tgmarinho/anki/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tgmarinho/anki/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/tgmarinho/anki/teams",
    hooks_url: "https://api.github.com/repos/tgmarinho/anki/hooks",
    issue_events_url:
      "https://api.github.com/repos/tgmarinho/anki/issues/events{/number}",
    events_url: "https://api.github.com/repos/tgmarinho/anki/events",
    assignees_url:
      "https://api.github.com/repos/tgmarinho/anki/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tgmarinho/anki/branches{/branch}",
    tags_url: "https://api.github.com/repos/tgmarinho/anki/tags",
    blobs_url: "https://api.github.com/repos/tgmarinho/anki/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/tgmarinho/anki/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/tgmarinho/anki/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/tgmarinho/anki/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/tgmarinho/anki/statuses/{sha}",
    languages_url: "https://api.github.com/repos/tgmarinho/anki/languages",
    stargazers_url: "https://api.github.com/repos/tgmarinho/anki/stargazers",
    contributors_url:
      "https://api.github.com/repos/tgmarinho/anki/contributors",
    subscribers_url: "https://api.github.com/repos/tgmarinho/anki/subscribers",
    subscription_url:
      "https://api.github.com/repos/tgmarinho/anki/subscription",
    commits_url: "https://api.github.com/repos/tgmarinho/anki/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tgmarinho/anki/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tgmarinho/anki/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tgmarinho/anki/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tgmarinho/anki/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tgmarinho/anki/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/tgmarinho/anki/merges",
    archive_url:
      "https://api.github.com/repos/tgmarinho/anki/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/tgmarinho/anki/downloads",
    issues_url: "https://api.github.com/repos/tgmarinho/anki/issues{/number}",
    pulls_url: "https://api.github.com/repos/tgmarinho/anki/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tgmarinho/anki/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tgmarinho/anki/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/tgmarinho/anki/labels{/name}",
    releases_url: "https://api.github.com/repos/tgmarinho/anki/releases{/id}",
    deployments_url: "https://api.github.com/repos/tgmarinho/anki/deployments",
    created_at: "2018-04-26T23:48:53Z",
    updated_at: "2018-04-26T23:48:56Z",
    pushed_at: "2018-04-23T01:22:28Z",
    git_url: "git://github.com/tgmarinho/anki.git",
    ssh_url: "git@github.com:tgmarinho/anki.git",
    clone_url: "https://github.com/tgmarinho/anki.git",
    svn_url: "https://github.com/tgmarinho/anki",
    homepage: null,
    size: 3696,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Python",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "other",
      name: "Other",
      spdx_id: "NOASSERTION",
      url: null,
      node_id: "MDc6TGljZW5zZTA="
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 123360759,
    node_id: "MDEwOlJlcG9zaXRvcnkxMjMzNjA3NTk=",
    name: "apollo",
    full_name: "tgmarinho/apollo",
    private: false,
    owner: {
      login: "tgmarinho",
      id: 380327,
      node_id: "MDQ6VXNlcjM4MDMyNw==",
      avatar_url: "https://avatars2.githubusercontent.com/u/380327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tgmarinho",
      html_url: "https://github.com/tgmarinho",
      followers_url: "https://api.github.com/users/tgmarinho/followers",
      following_url:
        "https://api.github.com/users/tgmarinho/following{/other_user}",
      gists_url: "https://api.github.com/users/tgmarinho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tgmarinho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tgmarinho/subscriptions",
      organizations_url: "https://api.github.com/users/tgmarinho/orgs",
      repos_url: "https://api.github.com/users/tgmarinho/repos",
      events_url: "https://api.github.com/users/tgmarinho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tgmarinho/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/tgmarinho/apollo",
    description:
      "level up -> Meteor + React + Apollo https://www.youtube.com/watch?v=K-R3bmsXpz0&list=PLLnpHn493BHFTDL9M1PKnxQwBwOZ8J-h4&index=4",
    fork: false,
    url: "https://api.github.com/repos/tgmarinho/apollo",
    forks_url: "https://api.github.com/repos/tgmarinho/apollo/forks",
    keys_url: "https://api.github.com/repos/tgmarinho/apollo/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tgmarinho/apollo/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/tgmarinho/apollo/teams",
    hooks_url: "https://api.github.com/repos/tgmarinho/apollo/hooks",
    issue_events_url:
      "https://api.github.com/repos/tgmarinho/apollo/issues/events{/number}",
    events_url: "https://api.github.com/repos/tgmarinho/apollo/events",
    assignees_url:
      "https://api.github.com/repos/tgmarinho/apollo/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tgmarinho/apollo/branches{/branch}",
    tags_url: "https://api.github.com/repos/tgmarinho/apollo/tags",
    blobs_url: "https://api.github.com/repos/tgmarinho/apollo/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/tgmarinho/apollo/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/tgmarinho/apollo/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/tgmarinho/apollo/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/tgmarinho/apollo/statuses/{sha}",
    languages_url: "https://api.github.com/repos/tgmarinho/apollo/languages",
    stargazers_url: "https://api.github.com/repos/tgmarinho/apollo/stargazers",
    contributors_url:
      "https://api.github.com/repos/tgmarinho/apollo/contributors",
    subscribers_url:
      "https://api.github.com/repos/tgmarinho/apollo/subscribers",
    subscription_url:
      "https://api.github.com/repos/tgmarinho/apollo/subscription",
    commits_url: "https://api.github.com/repos/tgmarinho/apollo/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tgmarinho/apollo/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tgmarinho/apollo/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tgmarinho/apollo/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tgmarinho/apollo/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tgmarinho/apollo/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/tgmarinho/apollo/merges",
    archive_url:
      "https://api.github.com/repos/tgmarinho/apollo/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/tgmarinho/apollo/downloads",
    issues_url: "https://api.github.com/repos/tgmarinho/apollo/issues{/number}",
    pulls_url: "https://api.github.com/repos/tgmarinho/apollo/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tgmarinho/apollo/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tgmarinho/apollo/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/tgmarinho/apollo/labels{/name}",
    releases_url: "https://api.github.com/repos/tgmarinho/apollo/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/tgmarinho/apollo/deployments",
    created_at: "2018-03-01T00:43:10Z",
    updated_at: "2018-03-14T21:07:46Z",
    pushed_at: "2018-03-14T21:07:45Z",
    git_url: "git://github.com/tgmarinho/apollo.git",
    ssh_url: "git@github.com:tgmarinho/apollo.git",
    clone_url: "https://github.com/tgmarinho/apollo.git",
    svn_url: "https://github.com/tgmarinho/apollo",
    homepage: null,
    size: 79,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 49165229,
    node_id: "MDEwOlJlcG9zaXRvcnk0OTE2NTIyOQ==",
    name: "apps-for-android",
    full_name: "tgmarinho/apps-for-android",
    private: false,
    owner: {
      login: "tgmarinho",
      id: 380327,
      node_id: "MDQ6VXNlcjM4MDMyNw==",
      avatar_url: "https://avatars2.githubusercontent.com/u/380327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tgmarinho",
      html_url: "https://github.com/tgmarinho",
      followers_url: "https://api.github.com/users/tgmarinho/followers",
      following_url:
        "https://api.github.com/users/tgmarinho/following{/other_user}",
      gists_url: "https://api.github.com/users/tgmarinho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tgmarinho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tgmarinho/subscriptions",
      organizations_url: "https://api.github.com/users/tgmarinho/orgs",
      repos_url: "https://api.github.com/users/tgmarinho/repos",
      events_url: "https://api.github.com/users/tgmarinho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tgmarinho/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/tgmarinho/apps-for-android",
    description:
      "Automatically exported from code.google.com/p/apps-for-android",
    fork: false,
    url: "https://api.github.com/repos/tgmarinho/apps-for-android",
    forks_url: "https://api.github.com/repos/tgmarinho/apps-for-android/forks",
    keys_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/tgmarinho/apps-for-android/teams",
    hooks_url: "https://api.github.com/repos/tgmarinho/apps-for-android/hooks",
    issue_events_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/events",
    assignees_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/branches{/branch}",
    tags_url: "https://api.github.com/repos/tgmarinho/apps-for-android/tags",
    blobs_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/languages",
    stargazers_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/stargazers",
    contributors_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/contributors",
    subscribers_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/subscribers",
    subscription_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/subscription",
    commits_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/merges",
    archive_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/downloads",
    issues_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/labels{/name}",
    releases_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/tgmarinho/apps-for-android/deployments",
    created_at: "2016-01-06T22:19:06Z",
    updated_at: "2016-06-18T01:05:33Z",
    pushed_at: "2016-01-06T22:19:52Z",
    git_url: "git://github.com/tgmarinho/apps-for-android.git",
    ssh_url: "git@github.com:tgmarinho/apps-for-android.git",
    clone_url: "https://github.com/tgmarinho/apps-for-android.git",
    svn_url: "https://github.com/tgmarinho/apps-for-android",
    homepage: null,
    size: 3806,
    stargazers_count: 1,
    watchers_count: 1,
    language: "Java",
    has_issues: true,
    has_projects: true,
    has_downloads: false,
    has_wiki: false,
    has_pages: false,
    forks_count: 2,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 70,
    license: {
      key: "apache-2.0",
      name: "Apache License 2.0",
      spdx_id: "Apache-2.0",
      url: "https://api.github.com/licenses/apache-2.0",
      node_id: "MDc6TGljZW5zZTI="
    },
    forks: 2,
    open_issues: 70,
    watchers: 1,
    default_branch: "master"
  },
  {
    id: 129106412,
    node_id: "MDEwOlJlcG9zaXRvcnkxMjkxMDY0MTI=",
    name: "aprenda-frontend",
    full_name: "tgmarinho/aprenda-frontend",
    private: false,
    owner: {
      login: "tgmarinho",
      id: 380327,
      node_id: "MDQ6VXNlcjM4MDMyNw==",
      avatar_url: "https://avatars2.githubusercontent.com/u/380327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tgmarinho",
      html_url: "https://github.com/tgmarinho",
      followers_url: "https://api.github.com/users/tgmarinho/followers",
      following_url:
        "https://api.github.com/users/tgmarinho/following{/other_user}",
      gists_url: "https://api.github.com/users/tgmarinho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tgmarinho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tgmarinho/subscriptions",
      organizations_url: "https://api.github.com/users/tgmarinho/orgs",
      repos_url: "https://api.github.com/users/tgmarinho/repos",
      events_url: "https://api.github.com/users/tgmarinho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tgmarinho/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/tgmarinho/aprenda-frontend",
    description: ":books: Central de conhecimento sobre front-end",
    fork: true,
    url: "https://api.github.com/repos/tgmarinho/aprenda-frontend",
    forks_url: "https://api.github.com/repos/tgmarinho/aprenda-frontend/forks",
    keys_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/tgmarinho/aprenda-frontend/teams",
    hooks_url: "https://api.github.com/repos/tgmarinho/aprenda-frontend/hooks",
    issue_events_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/events",
    assignees_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/branches{/branch}",
    tags_url: "https://api.github.com/repos/tgmarinho/aprenda-frontend/tags",
    blobs_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/languages",
    stargazers_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/stargazers",
    contributors_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/contributors",
    subscribers_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/subscribers",
    subscription_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/subscription",
    commits_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/merges",
    archive_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/downloads",
    issues_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/labels{/name}",
    releases_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/tgmarinho/aprenda-frontend/deployments",
    created_at: "2018-04-11T14:27:08Z",
    updated_at: "2018-04-11T14:48:00Z",
    pushed_at: "2018-04-06T17:09:30Z",
    git_url: "git://github.com/tgmarinho/aprenda-frontend.git",
    ssh_url: "git@github.com:tgmarinho/aprenda-frontend.git",
    clone_url: "https://github.com/tgmarinho/aprenda-frontend.git",
    svn_url: "https://github.com/tgmarinho/aprenda-frontend",
    homepage: "",
    size: 62,
    stargazers_count: 1,
    watchers_count: 1,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "master"
  },
  {
    id: 128083694,
    node_id: "MDEwOlJlcG9zaXRvcnkxMjgwODM2OTQ=",
    name: "awesome",
    full_name: "tgmarinho/awesome",
    private: false,
    owner: {
      login: "tgmarinho",
      id: 380327,
      node_id: "MDQ6VXNlcjM4MDMyNw==",
      avatar_url: "https://avatars2.githubusercontent.com/u/380327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tgmarinho",
      html_url: "https://github.com/tgmarinho",
      followers_url: "https://api.github.com/users/tgmarinho/followers",
      following_url:
        "https://api.github.com/users/tgmarinho/following{/other_user}",
      gists_url: "https://api.github.com/users/tgmarinho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tgmarinho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tgmarinho/subscriptions",
      organizations_url: "https://api.github.com/users/tgmarinho/orgs",
      repos_url: "https://api.github.com/users/tgmarinho/repos",
      events_url: "https://api.github.com/users/tgmarinho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tgmarinho/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/tgmarinho/awesome",
    description: ":sunglasses: Curated list of awesome lists",
    fork: true,
    url: "https://api.github.com/repos/tgmarinho/awesome",
    forks_url: "https://api.github.com/repos/tgmarinho/awesome/forks",
    keys_url: "https://api.github.com/repos/tgmarinho/awesome/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tgmarinho/awesome/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/tgmarinho/awesome/teams",
    hooks_url: "https://api.github.com/repos/tgmarinho/awesome/hooks",
    issue_events_url:
      "https://api.github.com/repos/tgmarinho/awesome/issues/events{/number}",
    events_url: "https://api.github.com/repos/tgmarinho/awesome/events",
    assignees_url:
      "https://api.github.com/repos/tgmarinho/awesome/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tgmarinho/awesome/branches{/branch}",
    tags_url: "https://api.github.com/repos/tgmarinho/awesome/tags",
    blobs_url: "https://api.github.com/repos/tgmarinho/awesome/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/tgmarinho/awesome/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/tgmarinho/awesome/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/tgmarinho/awesome/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/tgmarinho/awesome/statuses/{sha}",
    languages_url: "https://api.github.com/repos/tgmarinho/awesome/languages",
    stargazers_url: "https://api.github.com/repos/tgmarinho/awesome/stargazers",
    contributors_url:
      "https://api.github.com/repos/tgmarinho/awesome/contributors",
    subscribers_url:
      "https://api.github.com/repos/tgmarinho/awesome/subscribers",
    subscription_url:
      "https://api.github.com/repos/tgmarinho/awesome/subscription",
    commits_url: "https://api.github.com/repos/tgmarinho/awesome/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tgmarinho/awesome/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tgmarinho/awesome/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tgmarinho/awesome/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tgmarinho/awesome/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tgmarinho/awesome/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/tgmarinho/awesome/merges",
    archive_url:
      "https://api.github.com/repos/tgmarinho/awesome/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/tgmarinho/awesome/downloads",
    issues_url:
      "https://api.github.com/repos/tgmarinho/awesome/issues{/number}",
    pulls_url: "https://api.github.com/repos/tgmarinho/awesome/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tgmarinho/awesome/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tgmarinho/awesome/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/tgmarinho/awesome/labels{/name}",
    releases_url:
      "https://api.github.com/repos/tgmarinho/awesome/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/tgmarinho/awesome/deployments",
    created_at: "2018-04-04T15:37:10Z",
    updated_at: "2018-04-04T15:37:12Z",
    pushed_at: "2018-04-04T12:11:42Z",
    git_url: "git://github.com/tgmarinho/awesome.git",
    ssh_url: "git@github.com:tgmarinho/awesome.git",
    clone_url: "https://github.com/tgmarinho/awesome.git",
    svn_url: "https://github.com/tgmarinho/awesome",
    homepage: "",
    size: 747,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 135583143,
    node_id: "MDEwOlJlcG9zaXRvcnkxMzU1ODMxNDM=",
    name: "awesome-algorithms",
    full_name: "tgmarinho/awesome-algorithms",
    private: false,
    owner: {
      login: "tgmarinho",
      id: 380327,
      node_id: "MDQ6VXNlcjM4MDMyNw==",
      avatar_url: "https://avatars2.githubusercontent.com/u/380327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tgmarinho",
      html_url: "https://github.com/tgmarinho",
      followers_url: "https://api.github.com/users/tgmarinho/followers",
      following_url:
        "https://api.github.com/users/tgmarinho/following{/other_user}",
      gists_url: "https://api.github.com/users/tgmarinho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tgmarinho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tgmarinho/subscriptions",
      organizations_url: "https://api.github.com/users/tgmarinho/orgs",
      repos_url: "https://api.github.com/users/tgmarinho/repos",
      events_url: "https://api.github.com/users/tgmarinho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tgmarinho/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/tgmarinho/awesome-algorithms",
    description:
      "A curated list of awesome places to learn and/or practice algorithms.",
    fork: true,
    url: "https://api.github.com/repos/tgmarinho/awesome-algorithms",
    forks_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/forks",
    keys_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/teams",
    hooks_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/hooks",
    issue_events_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/events",
    assignees_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/branches{/branch}",
    tags_url: "https://api.github.com/repos/tgmarinho/awesome-algorithms/tags",
    blobs_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/languages",
    stargazers_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/stargazers",
    contributors_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/contributors",
    subscribers_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/subscribers",
    subscription_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/subscription",
    commits_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/merges",
    archive_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/downloads",
    issues_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/labels{/name}",
    releases_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/tgmarinho/awesome-algorithms/deployments",
    created_at: "2018-05-31T12:50:54Z",
    updated_at: "2018-05-31T12:50:56Z",
    pushed_at: "2018-05-28T22:15:37Z",
    git_url: "git://github.com/tgmarinho/awesome-algorithms.git",
    ssh_url: "git@github.com:tgmarinho/awesome-algorithms.git",
    clone_url: "https://github.com/tgmarinho/awesome-algorithms.git",
    svn_url: "https://github.com/tgmarinho/awesome-algorithms",
    homepage: null,
    size: 97,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 59322358,
    node_id: "MDEwOlJlcG9zaXRvcnk1OTMyMjM1OA==",
    name: "awesome-br.github.io",
    full_name: "tgmarinho/awesome-br.github.io",
    private: false,
    owner: {
      login: "tgmarinho",
      id: 380327,
      node_id: "MDQ6VXNlcjM4MDMyNw==",
      avatar_url: "https://avatars2.githubusercontent.com/u/380327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tgmarinho",
      html_url: "https://github.com/tgmarinho",
      followers_url: "https://api.github.com/users/tgmarinho/followers",
      following_url:
        "https://api.github.com/users/tgmarinho/following{/other_user}",
      gists_url: "https://api.github.com/users/tgmarinho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tgmarinho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tgmarinho/subscriptions",
      organizations_url: "https://api.github.com/users/tgmarinho/orgs",
      repos_url: "https://api.github.com/users/tgmarinho/repos",
      events_url: "https://api.github.com/users/tgmarinho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tgmarinho/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/tgmarinho/awesome-br.github.io",
    description: null,
    fork: true,
    url: "https://api.github.com/repos/tgmarinho/awesome-br.github.io",
    forks_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/forks",
    keys_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/teams",
    hooks_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/hooks",
    issue_events_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/events",
    assignees_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/tags",
    blobs_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/languages",
    stargazers_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/stargazers",
    contributors_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/contributors",
    subscribers_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/subscribers",
    subscription_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/subscription",
    commits_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/merges",
    archive_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/downloads",
    issues_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/labels{/name}",
    releases_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/tgmarinho/awesome-br.github.io/deployments",
    created_at: "2016-05-20T19:51:50Z",
    updated_at: "2016-05-20T19:51:51Z",
    pushed_at: "2016-05-20T13:31:04Z",
    git_url: "git://github.com/tgmarinho/awesome-br.github.io.git",
    ssh_url: "git@github.com:tgmarinho/awesome-br.github.io.git",
    clone_url: "https://github.com/tgmarinho/awesome-br.github.io.git",
    svn_url: "https://github.com/tgmarinho/awesome-br.github.io",
    homepage: "http://awesome-br.com",
    size: 782,
    stargazers_count: 0,
    watchers_count: 0,
    language: "HTML",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "cc0-1.0",
      name: "Creative Commons Zero v1.0 Universal",
      spdx_id: "CC0-1.0",
      url: "https://api.github.com/licenses/cc0-1.0",
      node_id: "MDc6TGljZW5zZTY="
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 136229569,
    node_id: "MDEwOlJlcG9zaXRvcnkxMzYyMjk1Njk=",
    name: "awesome-nodejs",
    full_name: "tgmarinho/awesome-nodejs",
    private: false,
    owner: {
      login: "tgmarinho",
      id: 380327,
      node_id: "MDQ6VXNlcjM4MDMyNw==",
      avatar_url: "https://avatars2.githubusercontent.com/u/380327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tgmarinho",
      html_url: "https://github.com/tgmarinho",
      followers_url: "https://api.github.com/users/tgmarinho/followers",
      following_url:
        "https://api.github.com/users/tgmarinho/following{/other_user}",
      gists_url: "https://api.github.com/users/tgmarinho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tgmarinho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tgmarinho/subscriptions",
      organizations_url: "https://api.github.com/users/tgmarinho/orgs",
      repos_url: "https://api.github.com/users/tgmarinho/repos",
      events_url: "https://api.github.com/users/tgmarinho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tgmarinho/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/tgmarinho/awesome-nodejs",
    description: ":zap: Delightful Node.js packages and resources",
    fork: true,
    url: "https://api.github.com/repos/tgmarinho/awesome-nodejs",
    forks_url: "https://api.github.com/repos/tgmarinho/awesome-nodejs/forks",
    keys_url:
      "https://api.github.com/repos/tgmarinho/awesome-nodejs/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tgmarinho/awesome-nodejs/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/tgmarinho/awesome-nodejs/teams",
    hooks_url: "https://api.github.com/repos/tgmarinho/awesome-nodejs/hooks",
    issue_events_url:
      "https://api.github.com/repos/tgmarinho/awesome-nodejs/issues/events{/number}",
    events_url: "https://api.github.com/repos/tgmarinho/awesome-nodejs/events",
    assignees_url:
      "https://api.github.com/repos/tgmarinho/awesome-nodejs/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tgmarinho/awesome-nodejs/branches{/branch}",
    tags_url: "https://api.github.com/repos/tgmarinho/awesome-nodejs/tags",
    blobs_url:
      "https://api.github.com/repos/tgmarinho/awesome-nodejs/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/tgmarinho/awesome-nodejs/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/tgmarinho/awesome-nodejs/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/tgmarinho/awesome-nodejs/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/tgmarinho/awesome-nodejs/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/tgmarinho/awesome-nodejs/languages",
    stargazers_url:
      "https://api.github.com/repos/tgmarinho/awesome-nodejs/stargazers",
    contributors_url:
      "https://api.github.com/repos/tgmarinho/awesome-nodejs/contributors",
    subscribers_url:
      "https://api.github.com/repos/tgmarinho/awesome-nodejs/subscribers",
    subscription_url:
      "https://api.github.com/repos/tgmarinho/awesome-nodejs/subscription",
    commits_url:
      "https://api.github.com/repos/tgmarinho/awesome-nodejs/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tgmarinho/awesome-nodejs/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tgmarinho/awesome-nodejs/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tgmarinho/awesome-nodejs/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tgmarinho/awesome-nodejs/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tgmarinho/awesome-nodejs/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/tgmarinho/awesome-nodejs/merges",
    archive_url:
      "https://api.github.com/repos/tgmarinho/awesome-nodejs/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/tgmarinho/awesome-nodejs/downloads",
    issues_url:
      "https://api.github.com/repos/tgmarinho/awesome-nodejs/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/tgmarinho/awesome-nodejs/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tgmarinho/awesome-nodejs/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tgmarinho/awesome-nodejs/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/tgmarinho/awesome-nodejs/labels{/name}",
    releases_url:
      "https://api.github.com/repos/tgmarinho/awesome-nodejs/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/tgmarinho/awesome-nodejs/deployments",
    created_at: "2018-06-05T20:12:15Z",
    updated_at: "2018-06-05T20:12:16Z",
    pushed_at: "2018-06-02T06:32:01Z",
    git_url: "git://github.com/tgmarinho/awesome-nodejs.git",
    ssh_url: "git@github.com:tgmarinho/awesome-nodejs.git",
    clone_url: "https://github.com/tgmarinho/awesome-nodejs.git",
    svn_url: "https://github.com/tgmarinho/awesome-nodejs",
    homepage: "https://node.cool",
    size: 1399,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 114122117,
    node_id: "MDEwOlJlcG9zaXRvcnkxMTQxMjIxMTc=",
    name: "awesome-readme",
    full_name: "tgmarinho/awesome-readme",
    private: false,
    owner: {
      login: "tgmarinho",
      id: 380327,
      node_id: "MDQ6VXNlcjM4MDMyNw==",
      avatar_url: "https://avatars2.githubusercontent.com/u/380327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tgmarinho",
      html_url: "https://github.com/tgmarinho",
      followers_url: "https://api.github.com/users/tgmarinho/followers",
      following_url:
        "https://api.github.com/users/tgmarinho/following{/other_user}",
      gists_url: "https://api.github.com/users/tgmarinho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tgmarinho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tgmarinho/subscriptions",
      organizations_url: "https://api.github.com/users/tgmarinho/orgs",
      repos_url: "https://api.github.com/users/tgmarinho/repos",
      events_url: "https://api.github.com/users/tgmarinho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tgmarinho/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/tgmarinho/awesome-readme",
    description: "A curated list of awesome READMEs",
    fork: true,
    url: "https://api.github.com/repos/tgmarinho/awesome-readme",
    forks_url: "https://api.github.com/repos/tgmarinho/awesome-readme/forks",
    keys_url:
      "https://api.github.com/repos/tgmarinho/awesome-readme/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tgmarinho/awesome-readme/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/tgmarinho/awesome-readme/teams",
    hooks_url: "https://api.github.com/repos/tgmarinho/awesome-readme/hooks",
    issue_events_url:
      "https://api.github.com/repos/tgmarinho/awesome-readme/issues/events{/number}",
    events_url: "https://api.github.com/repos/tgmarinho/awesome-readme/events",
    assignees_url:
      "https://api.github.com/repos/tgmarinho/awesome-readme/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tgmarinho/awesome-readme/branches{/branch}",
    tags_url: "https://api.github.com/repos/tgmarinho/awesome-readme/tags",
    blobs_url:
      "https://api.github.com/repos/tgmarinho/awesome-readme/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/tgmarinho/awesome-readme/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/tgmarinho/awesome-readme/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/tgmarinho/awesome-readme/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/tgmarinho/awesome-readme/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/tgmarinho/awesome-readme/languages",
    stargazers_url:
      "https://api.github.com/repos/tgmarinho/awesome-readme/stargazers",
    contributors_url:
      "https://api.github.com/repos/tgmarinho/awesome-readme/contributors",
    subscribers_url:
      "https://api.github.com/repos/tgmarinho/awesome-readme/subscribers",
    subscription_url:
      "https://api.github.com/repos/tgmarinho/awesome-readme/subscription",
    commits_url:
      "https://api.github.com/repos/tgmarinho/awesome-readme/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tgmarinho/awesome-readme/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tgmarinho/awesome-readme/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tgmarinho/awesome-readme/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tgmarinho/awesome-readme/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tgmarinho/awesome-readme/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/tgmarinho/awesome-readme/merges",
    archive_url:
      "https://api.github.com/repos/tgmarinho/awesome-readme/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/tgmarinho/awesome-readme/downloads",
    issues_url:
      "https://api.github.com/repos/tgmarinho/awesome-readme/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/tgmarinho/awesome-readme/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tgmarinho/awesome-readme/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tgmarinho/awesome-readme/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/tgmarinho/awesome-readme/labels{/name}",
    releases_url:
      "https://api.github.com/repos/tgmarinho/awesome-readme/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/tgmarinho/awesome-readme/deployments",
    created_at: "2017-12-13T13:08:37Z",
    updated_at: "2017-12-13T13:08:33Z",
    pushed_at: "2017-11-23T07:26:43Z",
    git_url: "git://github.com/tgmarinho/awesome-readme.git",
    ssh_url: "git@github.com:tgmarinho/awesome-readme.git",
    clone_url: "https://github.com/tgmarinho/awesome-readme.git",
    svn_url: "https://github.com/tgmarinho/awesome-readme",
    homepage: null,
    size: 93,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 180470155,
    node_id: "MDEwOlJlcG9zaXRvcnkxODA0NzAxNTU=",
    name: "backend-omnistack",
    full_name: "tgmarinho/backend-omnistack",
    private: false,
    owner: {
      login: "tgmarinho",
      id: 380327,
      node_id: "MDQ6VXNlcjM4MDMyNw==",
      avatar_url: "https://avatars2.githubusercontent.com/u/380327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tgmarinho",
      html_url: "https://github.com/tgmarinho",
      followers_url: "https://api.github.com/users/tgmarinho/followers",
      following_url:
        "https://api.github.com/users/tgmarinho/following{/other_user}",
      gists_url: "https://api.github.com/users/tgmarinho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tgmarinho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tgmarinho/subscriptions",
      organizations_url: "https://api.github.com/users/tgmarinho/orgs",
      repos_url: "https://api.github.com/users/tgmarinho/repos",
      events_url: "https://api.github.com/users/tgmarinho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tgmarinho/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/tgmarinho/backend-omnistack",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/tgmarinho/backend-omnistack",
    forks_url: "https://api.github.com/repos/tgmarinho/backend-omnistack/forks",
    keys_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/tgmarinho/backend-omnistack/teams",
    hooks_url: "https://api.github.com/repos/tgmarinho/backend-omnistack/hooks",
    issue_events_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/events",
    assignees_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/branches{/branch}",
    tags_url: "https://api.github.com/repos/tgmarinho/backend-omnistack/tags",
    blobs_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/languages",
    stargazers_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/stargazers",
    contributors_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/contributors",
    subscribers_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/subscribers",
    subscription_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/subscription",
    commits_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/merges",
    archive_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/downloads",
    issues_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/labels{/name}",
    releases_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/tgmarinho/backend-omnistack/deployments",
    created_at: "2019-04-10T00:29:13Z",
    updated_at: "2019-04-10T00:39:41Z",
    pushed_at: "2019-04-10T00:36:10Z",
    git_url: "git://github.com/tgmarinho/backend-omnistack.git",
    ssh_url: "git@github.com:tgmarinho/backend-omnistack.git",
    clone_url: "https://github.com/tgmarinho/backend-omnistack.git",
    svn_url: "https://github.com/tgmarinho/backend-omnistack",
    homepage: "https://omnistack-tg.herokuapp.com/boxes",
    size: 40,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 151482960,
    node_id: "MDEwOlJlcG9zaXRvcnkxNTE0ODI5NjA=",
    name: "background-generate",
    full_name: "tgmarinho/background-generate",
    private: false,
    owner: {
      login: "tgmarinho",
      id: 380327,
      node_id: "MDQ6VXNlcjM4MDMyNw==",
      avatar_url: "https://avatars2.githubusercontent.com/u/380327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tgmarinho",
      html_url: "https://github.com/tgmarinho",
      followers_url: "https://api.github.com/users/tgmarinho/followers",
      following_url:
        "https://api.github.com/users/tgmarinho/following{/other_user}",
      gists_url: "https://api.github.com/users/tgmarinho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tgmarinho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tgmarinho/subscriptions",
      organizations_url: "https://api.github.com/users/tgmarinho/orgs",
      repos_url: "https://api.github.com/users/tgmarinho/repos",
      events_url: "https://api.github.com/users/tgmarinho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tgmarinho/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/tgmarinho/background-generate",
    description: "Playing with JS, CSS and HTML! =) DOM manipulations",
    fork: false,
    url: "https://api.github.com/repos/tgmarinho/background-generate",
    forks_url:
      "https://api.github.com/repos/tgmarinho/background-generate/forks",
    keys_url:
      "https://api.github.com/repos/tgmarinho/background-generate/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tgmarinho/background-generate/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/tgmarinho/background-generate/teams",
    hooks_url:
      "https://api.github.com/repos/tgmarinho/background-generate/hooks",
    issue_events_url:
      "https://api.github.com/repos/tgmarinho/background-generate/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/tgmarinho/background-generate/events",
    assignees_url:
      "https://api.github.com/repos/tgmarinho/background-generate/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tgmarinho/background-generate/branches{/branch}",
    tags_url: "https://api.github.com/repos/tgmarinho/background-generate/tags",
    blobs_url:
      "https://api.github.com/repos/tgmarinho/background-generate/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/tgmarinho/background-generate/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/tgmarinho/background-generate/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/tgmarinho/background-generate/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/tgmarinho/background-generate/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/tgmarinho/background-generate/languages",
    stargazers_url:
      "https://api.github.com/repos/tgmarinho/background-generate/stargazers",
    contributors_url:
      "https://api.github.com/repos/tgmarinho/background-generate/contributors",
    subscribers_url:
      "https://api.github.com/repos/tgmarinho/background-generate/subscribers",
    subscription_url:
      "https://api.github.com/repos/tgmarinho/background-generate/subscription",
    commits_url:
      "https://api.github.com/repos/tgmarinho/background-generate/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tgmarinho/background-generate/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tgmarinho/background-generate/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tgmarinho/background-generate/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tgmarinho/background-generate/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tgmarinho/background-generate/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/tgmarinho/background-generate/merges",
    archive_url:
      "https://api.github.com/repos/tgmarinho/background-generate/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/tgmarinho/background-generate/downloads",
    issues_url:
      "https://api.github.com/repos/tgmarinho/background-generate/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/tgmarinho/background-generate/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tgmarinho/background-generate/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tgmarinho/background-generate/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/tgmarinho/background-generate/labels{/name}",
    releases_url:
      "https://api.github.com/repos/tgmarinho/background-generate/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/tgmarinho/background-generate/deployments",
    created_at: "2018-10-03T21:30:00Z",
    updated_at: "2018-10-03T21:34:15Z",
    pushed_at: "2018-10-03T21:33:13Z",
    git_url: "git://github.com/tgmarinho/background-generate.git",
    ssh_url: "git@github.com:tgmarinho/background-generate.git",
    clone_url: "https://github.com/tgmarinho/background-generate.git",
    svn_url: "https://github.com/tgmarinho/background-generate",
    homepage: "https://tgmarinho.github.io/background-generate/",
    size: 3,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 140359958,
    node_id: "MDEwOlJlcG9zaXRvcnkxNDAzNTk5NTg=",
    name: "best-practices",
    full_name: "tgmarinho/best-practices",
    private: false,
    owner: {
      login: "tgmarinho",
      id: 380327,
      node_id: "MDQ6VXNlcjM4MDMyNw==",
      avatar_url: "https://avatars2.githubusercontent.com/u/380327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tgmarinho",
      html_url: "https://github.com/tgmarinho",
      followers_url: "https://api.github.com/users/tgmarinho/followers",
      following_url:
        "https://api.github.com/users/tgmarinho/following{/other_user}",
      gists_url: "https://api.github.com/users/tgmarinho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tgmarinho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tgmarinho/subscriptions",
      organizations_url: "https://api.github.com/users/tgmarinho/orgs",
      repos_url: "https://api.github.com/users/tgmarinho/repos",
      events_url: "https://api.github.com/users/tgmarinho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tgmarinho/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/tgmarinho/best-practices",
    description: "Tidbits of developer best practices from around the web",
    fork: true,
    url: "https://api.github.com/repos/tgmarinho/best-practices",
    forks_url: "https://api.github.com/repos/tgmarinho/best-practices/forks",
    keys_url:
      "https://api.github.com/repos/tgmarinho/best-practices/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tgmarinho/best-practices/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/tgmarinho/best-practices/teams",
    hooks_url: "https://api.github.com/repos/tgmarinho/best-practices/hooks",
    issue_events_url:
      "https://api.github.com/repos/tgmarinho/best-practices/issues/events{/number}",
    events_url: "https://api.github.com/repos/tgmarinho/best-practices/events",
    assignees_url:
      "https://api.github.com/repos/tgmarinho/best-practices/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tgmarinho/best-practices/branches{/branch}",
    tags_url: "https://api.github.com/repos/tgmarinho/best-practices/tags",
    blobs_url:
      "https://api.github.com/repos/tgmarinho/best-practices/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/tgmarinho/best-practices/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/tgmarinho/best-practices/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/tgmarinho/best-practices/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/tgmarinho/best-practices/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/tgmarinho/best-practices/languages",
    stargazers_url:
      "https://api.github.com/repos/tgmarinho/best-practices/stargazers",
    contributors_url:
      "https://api.github.com/repos/tgmarinho/best-practices/contributors",
    subscribers_url:
      "https://api.github.com/repos/tgmarinho/best-practices/subscribers",
    subscription_url:
      "https://api.github.com/repos/tgmarinho/best-practices/subscription",
    commits_url:
      "https://api.github.com/repos/tgmarinho/best-practices/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tgmarinho/best-practices/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tgmarinho/best-practices/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tgmarinho/best-practices/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tgmarinho/best-practices/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tgmarinho/best-practices/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/tgmarinho/best-practices/merges",
    archive_url:
      "https://api.github.com/repos/tgmarinho/best-practices/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/tgmarinho/best-practices/downloads",
    issues_url:
      "https://api.github.com/repos/tgmarinho/best-practices/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/tgmarinho/best-practices/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tgmarinho/best-practices/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tgmarinho/best-practices/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/tgmarinho/best-practices/labels{/name}",
    releases_url:
      "https://api.github.com/repos/tgmarinho/best-practices/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/tgmarinho/best-practices/deployments",
    created_at: "2018-07-10T01:18:40Z",
    updated_at: "2018-07-10T01:18:42Z",
    pushed_at: "2015-11-14T05:59:23Z",
    git_url: "git://github.com/tgmarinho/best-practices.git",
    ssh_url: "git@github.com:tgmarinho/best-practices.git",
    clone_url: "https://github.com/tgmarinho/best-practices.git",
    svn_url: "https://github.com/tgmarinho/best-practices",
    homepage: "",
    size: 293,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 136497593,
    node_id: "MDEwOlJlcG9zaXRvcnkxMzY0OTc1OTM=",
    name: "bigbluebutton",
    full_name: "tgmarinho/bigbluebutton",
    private: false,
    owner: {
      login: "tgmarinho",
      id: 380327,
      node_id: "MDQ6VXNlcjM4MDMyNw==",
      avatar_url: "https://avatars2.githubusercontent.com/u/380327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tgmarinho",
      html_url: "https://github.com/tgmarinho",
      followers_url: "https://api.github.com/users/tgmarinho/followers",
      following_url:
        "https://api.github.com/users/tgmarinho/following{/other_user}",
      gists_url: "https://api.github.com/users/tgmarinho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tgmarinho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tgmarinho/subscriptions",
      organizations_url: "https://api.github.com/users/tgmarinho/orgs",
      repos_url: "https://api.github.com/users/tgmarinho/repos",
      events_url: "https://api.github.com/users/tgmarinho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tgmarinho/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/tgmarinho/bigbluebutton",
    description: "Complete open source web conferencing system.",
    fork: true,
    url: "https://api.github.com/repos/tgmarinho/bigbluebutton",
    forks_url: "https://api.github.com/repos/tgmarinho/bigbluebutton/forks",
    keys_url:
      "https://api.github.com/repos/tgmarinho/bigbluebutton/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tgmarinho/bigbluebutton/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/tgmarinho/bigbluebutton/teams",
    hooks_url: "https://api.github.com/repos/tgmarinho/bigbluebutton/hooks",
    issue_events_url:
      "https://api.github.com/repos/tgmarinho/bigbluebutton/issues/events{/number}",
    events_url: "https://api.github.com/repos/tgmarinho/bigbluebutton/events",
    assignees_url:
      "https://api.github.com/repos/tgmarinho/bigbluebutton/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tgmarinho/bigbluebutton/branches{/branch}",
    tags_url: "https://api.github.com/repos/tgmarinho/bigbluebutton/tags",
    blobs_url:
      "https://api.github.com/repos/tgmarinho/bigbluebutton/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/tgmarinho/bigbluebutton/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/tgmarinho/bigbluebutton/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/tgmarinho/bigbluebutton/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/tgmarinho/bigbluebutton/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/tgmarinho/bigbluebutton/languages",
    stargazers_url:
      "https://api.github.com/repos/tgmarinho/bigbluebutton/stargazers",
    contributors_url:
      "https://api.github.com/repos/tgmarinho/bigbluebutton/contributors",
    subscribers_url:
      "https://api.github.com/repos/tgmarinho/bigbluebutton/subscribers",
    subscription_url:
      "https://api.github.com/repos/tgmarinho/bigbluebutton/subscription",
    commits_url:
      "https://api.github.com/repos/tgmarinho/bigbluebutton/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tgmarinho/bigbluebutton/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tgmarinho/bigbluebutton/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tgmarinho/bigbluebutton/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tgmarinho/bigbluebutton/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tgmarinho/bigbluebutton/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/tgmarinho/bigbluebutton/merges",
    archive_url:
      "https://api.github.com/repos/tgmarinho/bigbluebutton/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/tgmarinho/bigbluebutton/downloads",
    issues_url:
      "https://api.github.com/repos/tgmarinho/bigbluebutton/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/tgmarinho/bigbluebutton/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tgmarinho/bigbluebutton/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tgmarinho/bigbluebutton/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/tgmarinho/bigbluebutton/labels{/name}",
    releases_url:
      "https://api.github.com/repos/tgmarinho/bigbluebutton/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/tgmarinho/bigbluebutton/deployments",
    created_at: "2018-06-07T15:33:22Z",
    updated_at: "2018-06-07T15:33:36Z",
    pushed_at: "2018-06-07T15:27:08Z",
    git_url: "git://github.com/tgmarinho/bigbluebutton.git",
    ssh_url: "git@github.com:tgmarinho/bigbluebutton.git",
    clone_url: "https://github.com/tgmarinho/bigbluebutton.git",
    svn_url: "https://github.com/tgmarinho/bigbluebutton",
    homepage: "http://www.bigbluebutton.org",
    size: 644726,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Java",
    has_issues: false,
    has_projects: true,
    has_downloads: false,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 182850254,
    node_id: "MDEwOlJlcG9zaXRvcnkxODI4NTAyNTQ=",
    name: "bootcamp",
    full_name: "tgmarinho/bootcamp",
    private: false,
    owner: {
      login: "tgmarinho",
      id: 380327,
      node_id: "MDQ6VXNlcjM4MDMyNw==",
      avatar_url: "https://avatars2.githubusercontent.com/u/380327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tgmarinho",
      html_url: "https://github.com/tgmarinho",
      followers_url: "https://api.github.com/users/tgmarinho/followers",
      following_url:
        "https://api.github.com/users/tgmarinho/following{/other_user}",
      gists_url: "https://api.github.com/users/tgmarinho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tgmarinho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tgmarinho/subscriptions",
      organizations_url: "https://api.github.com/users/tgmarinho/orgs",
      repos_url: "https://api.github.com/users/tgmarinho/repos",
      events_url: "https://api.github.com/users/tgmarinho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tgmarinho/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/tgmarinho/bootcamp",
    description: "Rockeatseat - Bootcamp - Go-Week-06",
    fork: false,
    url: "https://api.github.com/repos/tgmarinho/bootcamp",
    forks_url: "https://api.github.com/repos/tgmarinho/bootcamp/forks",
    keys_url: "https://api.github.com/repos/tgmarinho/bootcamp/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tgmarinho/bootcamp/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/tgmarinho/bootcamp/teams",
    hooks_url: "https://api.github.com/repos/tgmarinho/bootcamp/hooks",
    issue_events_url:
      "https://api.github.com/repos/tgmarinho/bootcamp/issues/events{/number}",
    events_url: "https://api.github.com/repos/tgmarinho/bootcamp/events",
    assignees_url:
      "https://api.github.com/repos/tgmarinho/bootcamp/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tgmarinho/bootcamp/branches{/branch}",
    tags_url: "https://api.github.com/repos/tgmarinho/bootcamp/tags",
    blobs_url:
      "https://api.github.com/repos/tgmarinho/bootcamp/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/tgmarinho/bootcamp/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/tgmarinho/bootcamp/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/tgmarinho/bootcamp/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/tgmarinho/bootcamp/statuses/{sha}",
    languages_url: "https://api.github.com/repos/tgmarinho/bootcamp/languages",
    stargazers_url:
      "https://api.github.com/repos/tgmarinho/bootcamp/stargazers",
    contributors_url:
      "https://api.github.com/repos/tgmarinho/bootcamp/contributors",
    subscribers_url:
      "https://api.github.com/repos/tgmarinho/bootcamp/subscribers",
    subscription_url:
      "https://api.github.com/repos/tgmarinho/bootcamp/subscription",
    commits_url:
      "https://api.github.com/repos/tgmarinho/bootcamp/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tgmarinho/bootcamp/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tgmarinho/bootcamp/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tgmarinho/bootcamp/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tgmarinho/bootcamp/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tgmarinho/bootcamp/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/tgmarinho/bootcamp/merges",
    archive_url:
      "https://api.github.com/repos/tgmarinho/bootcamp/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/tgmarinho/bootcamp/downloads",
    issues_url:
      "https://api.github.com/repos/tgmarinho/bootcamp/issues{/number}",
    pulls_url: "https://api.github.com/repos/tgmarinho/bootcamp/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tgmarinho/bootcamp/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tgmarinho/bootcamp/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/tgmarinho/bootcamp/labels{/name}",
    releases_url:
      "https://api.github.com/repos/tgmarinho/bootcamp/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/tgmarinho/bootcamp/deployments",
    created_at: "2019-04-22T19:03:18Z",
    updated_at: "2019-05-26T16:33:53Z",
    pushed_at: "2019-05-26T16:33:52Z",
    git_url: "git://github.com/tgmarinho/bootcamp.git",
    ssh_url: "git@github.com:tgmarinho/bootcamp.git",
    clone_url: "https://github.com/tgmarinho/bootcamp.git",
    svn_url: "https://github.com/tgmarinho/bootcamp",
    homepage: null,
    size: 3369,
    stargazers_count: 1,
    watchers_count: 1,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "master"
  },
  {
    id: 77832870,
    node_id: "MDEwOlJlcG9zaXRvcnk3NzgzMjg3MA==",
    name: "bootstrap-boas-praticas-no-front-end",
    full_name: "tgmarinho/bootstrap-boas-praticas-no-front-end",
    private: false,
    owner: {
      login: "tgmarinho",
      id: 380327,
      node_id: "MDQ6VXNlcjM4MDMyNw==",
      avatar_url: "https://avatars2.githubusercontent.com/u/380327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tgmarinho",
      html_url: "https://github.com/tgmarinho",
      followers_url: "https://api.github.com/users/tgmarinho/followers",
      following_url:
        "https://api.github.com/users/tgmarinho/following{/other_user}",
      gists_url: "https://api.github.com/users/tgmarinho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tgmarinho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tgmarinho/subscriptions",
      organizations_url: "https://api.github.com/users/tgmarinho/orgs",
      repos_url: "https://api.github.com/users/tgmarinho/repos",
      events_url: "https://api.github.com/users/tgmarinho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tgmarinho/received_events",
      type: "User",
      site_admin: false
    },
    html_url:
      "https://github.com/tgmarinho/bootstrap-boas-praticas-no-front-end",
    description: "curso de bootstrap 3 ",
    fork: true,
    url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end",
    forks_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/forks",
    keys_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/teams",
    hooks_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/hooks",
    issue_events_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/events",
    assignees_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/tags",
    blobs_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/languages",
    stargazers_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/stargazers",
    contributors_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/contributors",
    subscribers_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/subscribers",
    subscription_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/subscription",
    commits_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/merges",
    archive_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/downloads",
    issues_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/labels{/name}",
    releases_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/tgmarinho/bootstrap-boas-praticas-no-front-end/deployments",
    created_at: "2017-01-02T12:46:42Z",
    updated_at: "2017-01-02T12:46:45Z",
    pushed_at: "2016-08-22T17:59:50Z",
    git_url:
      "git://github.com/tgmarinho/bootstrap-boas-praticas-no-front-end.git",
    ssh_url:
      "git@github.com:tgmarinho/bootstrap-boas-praticas-no-front-end.git",
    clone_url:
      "https://github.com/tgmarinho/bootstrap-boas-praticas-no-front-end.git",
    svn_url:
      "https://github.com/tgmarinho/bootstrap-boas-praticas-no-front-end",
    homepage: null,
    size: 18951,
    stargazers_count: 1,
    watchers_count: 1,
    language: "HTML",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "master"
  },
  {
    id: 139084840,
    node_id: "MDEwOlJlcG9zaXRvcnkxMzkwODQ4NDA=",
    name: "bora-ajudar",
    full_name: "tgmarinho/bora-ajudar",
    private: false,
    owner: {
      login: "tgmarinho",
      id: 380327,
      node_id: "MDQ6VXNlcjM4MDMyNw==",
      avatar_url: "https://avatars2.githubusercontent.com/u/380327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tgmarinho",
      html_url: "https://github.com/tgmarinho",
      followers_url: "https://api.github.com/users/tgmarinho/followers",
      following_url:
        "https://api.github.com/users/tgmarinho/following{/other_user}",
      gists_url: "https://api.github.com/users/tgmarinho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tgmarinho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tgmarinho/subscriptions",
      organizations_url: "https://api.github.com/users/tgmarinho/orgs",
      repos_url: "https://api.github.com/users/tgmarinho/repos",
      events_url: "https://api.github.com/users/tgmarinho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tgmarinho/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/tgmarinho/bora-ajudar",
    description: "Criando um site estático com React apartir de um layout ",
    fork: false,
    url: "https://api.github.com/repos/tgmarinho/bora-ajudar",
    forks_url: "https://api.github.com/repos/tgmarinho/bora-ajudar/forks",
    keys_url:
      "https://api.github.com/repos/tgmarinho/bora-ajudar/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tgmarinho/bora-ajudar/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/tgmarinho/bora-ajudar/teams",
    hooks_url: "https://api.github.com/repos/tgmarinho/bora-ajudar/hooks",
    issue_events_url:
      "https://api.github.com/repos/tgmarinho/bora-ajudar/issues/events{/number}",
    events_url: "https://api.github.com/repos/tgmarinho/bora-ajudar/events",
    assignees_url:
      "https://api.github.com/repos/tgmarinho/bora-ajudar/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tgmarinho/bora-ajudar/branches{/branch}",
    tags_url: "https://api.github.com/repos/tgmarinho/bora-ajudar/tags",
    blobs_url:
      "https://api.github.com/repos/tgmarinho/bora-ajudar/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/tgmarinho/bora-ajudar/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/tgmarinho/bora-ajudar/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/tgmarinho/bora-ajudar/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/tgmarinho/bora-ajudar/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/tgmarinho/bora-ajudar/languages",
    stargazers_url:
      "https://api.github.com/repos/tgmarinho/bora-ajudar/stargazers",
    contributors_url:
      "https://api.github.com/repos/tgmarinho/bora-ajudar/contributors",
    subscribers_url:
      "https://api.github.com/repos/tgmarinho/bora-ajudar/subscribers",
    subscription_url:
      "https://api.github.com/repos/tgmarinho/bora-ajudar/subscription",
    commits_url:
      "https://api.github.com/repos/tgmarinho/bora-ajudar/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tgmarinho/bora-ajudar/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tgmarinho/bora-ajudar/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tgmarinho/bora-ajudar/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tgmarinho/bora-ajudar/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tgmarinho/bora-ajudar/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/tgmarinho/bora-ajudar/merges",
    archive_url:
      "https://api.github.com/repos/tgmarinho/bora-ajudar/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/tgmarinho/bora-ajudar/downloads",
    issues_url:
      "https://api.github.com/repos/tgmarinho/bora-ajudar/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/tgmarinho/bora-ajudar/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tgmarinho/bora-ajudar/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tgmarinho/bora-ajudar/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/tgmarinho/bora-ajudar/labels{/name}",
    releases_url:
      "https://api.github.com/repos/tgmarinho/bora-ajudar/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/tgmarinho/bora-ajudar/deployments",
    created_at: "2018-06-29T01:13:22Z",
    updated_at: "2018-07-04T17:44:26Z",
    pushed_at: "2018-07-04T17:44:25Z",
    git_url: "git://github.com/tgmarinho/bora-ajudar.git",
    ssh_url: "git@github.com:tgmarinho/bora-ajudar.git",
    clone_url: "https://github.com/tgmarinho/bora-ajudar.git",
    svn_url: "https://github.com/tgmarinho/bora-ajudar",
    homepage: null,
    size: 52229,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 117862236,
    node_id: "MDEwOlJlcG9zaXRvcnkxMTc4NjIyMzY=",
    name: "btc-converter-tg",
    full_name: "tgmarinho/btc-converter-tg",
    private: false,
    owner: {
      login: "tgmarinho",
      id: 380327,
      node_id: "MDQ6VXNlcjM4MDMyNw==",
      avatar_url: "https://avatars2.githubusercontent.com/u/380327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tgmarinho",
      html_url: "https://github.com/tgmarinho",
      followers_url: "https://api.github.com/users/tgmarinho/followers",
      following_url:
        "https://api.github.com/users/tgmarinho/following{/other_user}",
      gists_url: "https://api.github.com/users/tgmarinho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tgmarinho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tgmarinho/subscriptions",
      organizations_url: "https://api.github.com/users/tgmarinho/orgs",
      repos_url: "https://api.github.com/users/tgmarinho/repos",
      events_url: "https://api.github.com/users/tgmarinho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tgmarinho/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/tgmarinho/btc-converter-tg",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/tgmarinho/btc-converter-tg",
    forks_url: "https://api.github.com/repos/tgmarinho/btc-converter-tg/forks",
    keys_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/tgmarinho/btc-converter-tg/teams",
    hooks_url: "https://api.github.com/repos/tgmarinho/btc-converter-tg/hooks",
    issue_events_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/events",
    assignees_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/branches{/branch}",
    tags_url: "https://api.github.com/repos/tgmarinho/btc-converter-tg/tags",
    blobs_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/languages",
    stargazers_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/stargazers",
    contributors_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/contributors",
    subscribers_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/subscribers",
    subscription_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/subscription",
    commits_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/merges",
    archive_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/downloads",
    issues_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/labels{/name}",
    releases_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/tgmarinho/btc-converter-tg/deployments",
    created_at: "2018-01-17T16:28:49Z",
    updated_at: "2018-01-17T16:36:11Z",
    pushed_at: "2018-01-18T18:01:09Z",
    git_url: "git://github.com/tgmarinho/btc-converter-tg.git",
    ssh_url: "git@github.com:tgmarinho/btc-converter-tg.git",
    clone_url: "https://github.com/tgmarinho/btc-converter-tg.git",
    svn_url: "https://github.com/tgmarinho/btc-converter-tg",
    homepage: null,
    size: 32,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 5693928,
    node_id: "MDEwOlJlcG9zaXRvcnk1NjkzOTI4",
    name: "buscg",
    full_name: "tgmarinho/buscg",
    private: false,
    owner: {
      login: "tgmarinho",
      id: 380327,
      node_id: "MDQ6VXNlcjM4MDMyNw==",
      avatar_url: "https://avatars2.githubusercontent.com/u/380327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tgmarinho",
      html_url: "https://github.com/tgmarinho",
      followers_url: "https://api.github.com/users/tgmarinho/followers",
      following_url:
        "https://api.github.com/users/tgmarinho/following{/other_user}",
      gists_url: "https://api.github.com/users/tgmarinho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tgmarinho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tgmarinho/subscriptions",
      organizations_url: "https://api.github.com/users/tgmarinho/orgs",
      repos_url: "https://api.github.com/users/tgmarinho/repos",
      events_url: "https://api.github.com/users/tgmarinho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tgmarinho/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/tgmarinho/buscg",
    description: "tcc - android",
    fork: false,
    url: "https://api.github.com/repos/tgmarinho/buscg",
    forks_url: "https://api.github.com/repos/tgmarinho/buscg/forks",
    keys_url: "https://api.github.com/repos/tgmarinho/buscg/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tgmarinho/buscg/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/tgmarinho/buscg/teams",
    hooks_url: "https://api.github.com/repos/tgmarinho/buscg/hooks",
    issue_events_url:
      "https://api.github.com/repos/tgmarinho/buscg/issues/events{/number}",
    events_url: "https://api.github.com/repos/tgmarinho/buscg/events",
    assignees_url:
      "https://api.github.com/repos/tgmarinho/buscg/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tgmarinho/buscg/branches{/branch}",
    tags_url: "https://api.github.com/repos/tgmarinho/buscg/tags",
    blobs_url: "https://api.github.com/repos/tgmarinho/buscg/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/tgmarinho/buscg/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/tgmarinho/buscg/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/tgmarinho/buscg/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/tgmarinho/buscg/statuses/{sha}",
    languages_url: "https://api.github.com/repos/tgmarinho/buscg/languages",
    stargazers_url: "https://api.github.com/repos/tgmarinho/buscg/stargazers",
    contributors_url:
      "https://api.github.com/repos/tgmarinho/buscg/contributors",
    subscribers_url: "https://api.github.com/repos/tgmarinho/buscg/subscribers",
    subscription_url:
      "https://api.github.com/repos/tgmarinho/buscg/subscription",
    commits_url: "https://api.github.com/repos/tgmarinho/buscg/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tgmarinho/buscg/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tgmarinho/buscg/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tgmarinho/buscg/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tgmarinho/buscg/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tgmarinho/buscg/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/tgmarinho/buscg/merges",
    archive_url:
      "https://api.github.com/repos/tgmarinho/buscg/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/tgmarinho/buscg/downloads",
    issues_url: "https://api.github.com/repos/tgmarinho/buscg/issues{/number}",
    pulls_url: "https://api.github.com/repos/tgmarinho/buscg/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tgmarinho/buscg/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tgmarinho/buscg/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/tgmarinho/buscg/labels{/name}",
    releases_url: "https://api.github.com/repos/tgmarinho/buscg/releases{/id}",
    deployments_url: "https://api.github.com/repos/tgmarinho/buscg/deployments",
    created_at: "2012-09-05T21:30:03Z",
    updated_at: "2013-10-09T23:18:04Z",
    pushed_at: "2012-10-21T20:54:08Z",
    git_url: "git://github.com/tgmarinho/buscg.git",
    ssh_url: "git@github.com:tgmarinho/buscg.git",
    clone_url: "https://github.com/tgmarinho/buscg.git",
    svn_url: "https://github.com/tgmarinho/buscg",
    homepage: null,
    size: 2612,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Java",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 5874939,
    node_id: "MDEwOlJlcG9zaXRvcnk1ODc0OTM5",
    name: "buscgsender",
    full_name: "tgmarinho/buscgsender",
    private: false,
    owner: {
      login: "tgmarinho",
      id: 380327,
      node_id: "MDQ6VXNlcjM4MDMyNw==",
      avatar_url: "https://avatars2.githubusercontent.com/u/380327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tgmarinho",
      html_url: "https://github.com/tgmarinho",
      followers_url: "https://api.github.com/users/tgmarinho/followers",
      following_url:
        "https://api.github.com/users/tgmarinho/following{/other_user}",
      gists_url: "https://api.github.com/users/tgmarinho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tgmarinho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tgmarinho/subscriptions",
      organizations_url: "https://api.github.com/users/tgmarinho/orgs",
      repos_url: "https://api.github.com/users/tgmarinho/repos",
      events_url: "https://api.github.com/users/tgmarinho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tgmarinho/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/tgmarinho/buscgsender",
    description: "buscgsender",
    fork: false,
    url: "https://api.github.com/repos/tgmarinho/buscgsender",
    forks_url: "https://api.github.com/repos/tgmarinho/buscgsender/forks",
    keys_url:
      "https://api.github.com/repos/tgmarinho/buscgsender/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tgmarinho/buscgsender/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/tgmarinho/buscgsender/teams",
    hooks_url: "https://api.github.com/repos/tgmarinho/buscgsender/hooks",
    issue_events_url:
      "https://api.github.com/repos/tgmarinho/buscgsender/issues/events{/number}",
    events_url: "https://api.github.com/repos/tgmarinho/buscgsender/events",
    assignees_url:
      "https://api.github.com/repos/tgmarinho/buscgsender/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tgmarinho/buscgsender/branches{/branch}",
    tags_url: "https://api.github.com/repos/tgmarinho/buscgsender/tags",
    blobs_url:
      "https://api.github.com/repos/tgmarinho/buscgsender/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/tgmarinho/buscgsender/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/tgmarinho/buscgsender/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/tgmarinho/buscgsender/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/tgmarinho/buscgsender/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/tgmarinho/buscgsender/languages",
    stargazers_url:
      "https://api.github.com/repos/tgmarinho/buscgsender/stargazers",
    contributors_url:
      "https://api.github.com/repos/tgmarinho/buscgsender/contributors",
    subscribers_url:
      "https://api.github.com/repos/tgmarinho/buscgsender/subscribers",
    subscription_url:
      "https://api.github.com/repos/tgmarinho/buscgsender/subscription",
    commits_url:
      "https://api.github.com/repos/tgmarinho/buscgsender/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tgmarinho/buscgsender/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tgmarinho/buscgsender/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tgmarinho/buscgsender/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tgmarinho/buscgsender/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tgmarinho/buscgsender/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/tgmarinho/buscgsender/merges",
    archive_url:
      "https://api.github.com/repos/tgmarinho/buscgsender/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/tgmarinho/buscgsender/downloads",
    issues_url:
      "https://api.github.com/repos/tgmarinho/buscgsender/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/tgmarinho/buscgsender/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tgmarinho/buscgsender/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tgmarinho/buscgsender/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/tgmarinho/buscgsender/labels{/name}",
    releases_url:
      "https://api.github.com/repos/tgmarinho/buscgsender/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/tgmarinho/buscgsender/deployments",
    created_at: "2012-09-19T16:43:28Z",
    updated_at: "2014-02-16T18:26:36Z",
    pushed_at: "2012-10-23T04:06:56Z",
    git_url: "git://github.com/tgmarinho/buscgsender.git",
    ssh_url: "git@github.com:tgmarinho/buscgsender.git",
    clone_url: "https://github.com/tgmarinho/buscgsender.git",
    svn_url: "https://github.com/tgmarinho/buscgsender",
    homepage: null,
    size: 1464,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Java",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 111681064,
    node_id: "MDEwOlJlcG9zaXRvcnkxMTE2ODEwNjQ=",
    name: "cards-jekyll-template",
    full_name: "tgmarinho/cards-jekyll-template",
    private: false,
    owner: {
      login: "tgmarinho",
      id: 380327,
      node_id: "MDQ6VXNlcjM4MDMyNw==",
      avatar_url: "https://avatars2.githubusercontent.com/u/380327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tgmarinho",
      html_url: "https://github.com/tgmarinho",
      followers_url: "https://api.github.com/users/tgmarinho/followers",
      following_url:
        "https://api.github.com/users/tgmarinho/following{/other_user}",
      gists_url: "https://api.github.com/users/tgmarinho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tgmarinho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tgmarinho/subscriptions",
      organizations_url: "https://api.github.com/users/tgmarinho/orgs",
      repos_url: "https://api.github.com/users/tgmarinho/repos",
      events_url: "https://api.github.com/users/tgmarinho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tgmarinho/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/tgmarinho/cards-jekyll-template",
    description: "A simple Jekyll Template Card Based.",
    fork: true,
    url: "https://api.github.com/repos/tgmarinho/cards-jekyll-template",
    forks_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/forks",
    keys_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/teams",
    hooks_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/hooks",
    issue_events_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/events",
    assignees_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/tags",
    blobs_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/languages",
    stargazers_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/stargazers",
    contributors_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/contributors",
    subscribers_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/subscribers",
    subscription_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/subscription",
    commits_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/merges",
    archive_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/downloads",
    issues_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/labels{/name}",
    releases_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/tgmarinho/cards-jekyll-template/deployments",
    created_at: "2017-11-22T12:24:40Z",
    updated_at: "2017-11-22T12:24:42Z",
    pushed_at: "2017-11-19T22:08:11Z",
    git_url: "git://github.com/tgmarinho/cards-jekyll-template.git",
    ssh_url: "git@github.com:tgmarinho/cards-jekyll-template.git",
    clone_url: "https://github.com/tgmarinho/cards-jekyll-template.git",
    svn_url: "https://github.com/tgmarinho/cards-jekyll-template",
    homepage: null,
    size: 632,
    stargazers_count: 0,
    watchers_count: 0,
    language: "HTML",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "other",
      name: "Other",
      spdx_id: "NOASSERTION",
      url: null,
      node_id: "MDc6TGljZW5zZTA="
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "gh-pages"
  },
  {
    id: 74430532,
    node_id: "MDEwOlJlcG9zaXRvcnk3NDQzMDUzMg==",
    name: "casadocodigo-boot-livro",
    full_name: "tgmarinho/casadocodigo-boot-livro",
    private: false,
    owner: {
      login: "tgmarinho",
      id: 380327,
      node_id: "MDQ6VXNlcjM4MDMyNw==",
      avatar_url: "https://avatars2.githubusercontent.com/u/380327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tgmarinho",
      html_url: "https://github.com/tgmarinho",
      followers_url: "https://api.github.com/users/tgmarinho/followers",
      following_url:
        "https://api.github.com/users/tgmarinho/following{/other_user}",
      gists_url: "https://api.github.com/users/tgmarinho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tgmarinho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tgmarinho/subscriptions",
      organizations_url: "https://api.github.com/users/tgmarinho/orgs",
      repos_url: "https://api.github.com/users/tgmarinho/repos",
      events_url: "https://api.github.com/users/tgmarinho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tgmarinho/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/tgmarinho/casadocodigo-boot-livro",
    description:
      "projeto para a galera que for ler o capítulo de spring boot do livro",
    fork: true,
    url: "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro",
    forks_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/forks",
    keys_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/teams",
    hooks_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/hooks",
    issue_events_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/events",
    assignees_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/tags",
    blobs_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/languages",
    stargazers_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/stargazers",
    contributors_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/contributors",
    subscribers_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/subscribers",
    subscription_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/subscription",
    commits_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/merges",
    archive_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/downloads",
    issues_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/labels{/name}",
    releases_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/tgmarinho/casadocodigo-boot-livro/deployments",
    created_at: "2016-11-22T03:30:14Z",
    updated_at: "2016-11-22T03:30:15Z",
    pushed_at: "2015-09-18T15:07:58Z",
    git_url: "git://github.com/tgmarinho/casadocodigo-boot-livro.git",
    ssh_url: "git@github.com:tgmarinho/casadocodigo-boot-livro.git",
    clone_url: "https://github.com/tgmarinho/casadocodigo-boot-livro.git",
    svn_url: "https://github.com/tgmarinho/casadocodigo-boot-livro",
    homepage: null,
    size: 132,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Java",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 151276909,
    node_id: "MDEwOlJlcG9zaXRvcnkxNTEyNzY5MDk=",
    name: "Challenge",
    full_name: "tgmarinho/Challenge",
    private: false,
    owner: {
      login: "tgmarinho",
      id: 380327,
      node_id: "MDQ6VXNlcjM4MDMyNw==",
      avatar_url: "https://avatars2.githubusercontent.com/u/380327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tgmarinho",
      html_url: "https://github.com/tgmarinho",
      followers_url: "https://api.github.com/users/tgmarinho/followers",
      following_url:
        "https://api.github.com/users/tgmarinho/following{/other_user}",
      gists_url: "https://api.github.com/users/tgmarinho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tgmarinho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tgmarinho/subscriptions",
      organizations_url: "https://api.github.com/users/tgmarinho/orgs",
      repos_url: "https://api.github.com/users/tgmarinho/repos",
      events_url: "https://api.github.com/users/tgmarinho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tgmarinho/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/tgmarinho/Challenge",
    description: "Become a Foton Developer :zap:",
    fork: true,
    url: "https://api.github.com/repos/tgmarinho/Challenge",
    forks_url: "https://api.github.com/repos/tgmarinho/Challenge/forks",
    keys_url: "https://api.github.com/repos/tgmarinho/Challenge/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tgmarinho/Challenge/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/tgmarinho/Challenge/teams",
    hooks_url: "https://api.github.com/repos/tgmarinho/Challenge/hooks",
    issue_events_url:
      "https://api.github.com/repos/tgmarinho/Challenge/issues/events{/number}",
    events_url: "https://api.github.com/repos/tgmarinho/Challenge/events",
    assignees_url:
      "https://api.github.com/repos/tgmarinho/Challenge/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tgmarinho/Challenge/branches{/branch}",
    tags_url: "https://api.github.com/repos/tgmarinho/Challenge/tags",
    blobs_url:
      "https://api.github.com/repos/tgmarinho/Challenge/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/tgmarinho/Challenge/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/tgmarinho/Challenge/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/tgmarinho/Challenge/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/tgmarinho/Challenge/statuses/{sha}",
    languages_url: "https://api.github.com/repos/tgmarinho/Challenge/languages",
    stargazers_url:
      "https://api.github.com/repos/tgmarinho/Challenge/stargazers",
    contributors_url:
      "https://api.github.com/repos/tgmarinho/Challenge/contributors",
    subscribers_url:
      "https://api.github.com/repos/tgmarinho/Challenge/subscribers",
    subscription_url:
      "https://api.github.com/repos/tgmarinho/Challenge/subscription",
    commits_url:
      "https://api.github.com/repos/tgmarinho/Challenge/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tgmarinho/Challenge/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tgmarinho/Challenge/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tgmarinho/Challenge/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tgmarinho/Challenge/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tgmarinho/Challenge/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/tgmarinho/Challenge/merges",
    archive_url:
      "https://api.github.com/repos/tgmarinho/Challenge/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/tgmarinho/Challenge/downloads",
    issues_url:
      "https://api.github.com/repos/tgmarinho/Challenge/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/tgmarinho/Challenge/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tgmarinho/Challenge/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tgmarinho/Challenge/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/tgmarinho/Challenge/labels{/name}",
    releases_url:
      "https://api.github.com/repos/tgmarinho/Challenge/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/tgmarinho/Challenge/deployments",
    created_at: "2018-10-02T15:21:54Z",
    updated_at: "2018-10-02T15:21:56Z",
    pushed_at: "2018-10-02T12:21:42Z",
    git_url: "git://github.com/tgmarinho/Challenge.git",
    ssh_url: "git@github.com:tgmarinho/Challenge.git",
    clone_url: "https://github.com/tgmarinho/Challenge.git",
    svn_url: "https://github.com/tgmarinho/Challenge",
    homepage: "",
    size: 280,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Objective-C",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 145042685,
    node_id: "MDEwOlJlcG9zaXRvcnkxNDUwNDI2ODU=",
    name: "challenge-30-days-of-cedv",
    full_name: "tgmarinho/challenge-30-days-of-cedv",
    private: false,
    owner: {
      login: "tgmarinho",
      id: 380327,
      node_id: "MDQ6VXNlcjM4MDMyNw==",
      avatar_url: "https://avatars2.githubusercontent.com/u/380327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tgmarinho",
      html_url: "https://github.com/tgmarinho",
      followers_url: "https://api.github.com/users/tgmarinho/followers",
      following_url:
        "https://api.github.com/users/tgmarinho/following{/other_user}",
      gists_url: "https://api.github.com/users/tgmarinho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tgmarinho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tgmarinho/subscriptions",
      organizations_url: "https://api.github.com/users/tgmarinho/orgs",
      repos_url: "https://api.github.com/users/tgmarinho/repos",
      events_url: "https://api.github.com/users/tgmarinho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tgmarinho/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/tgmarinho/challenge-30-days-of-cedv",
    description:
      "Static page with information about challenge 30 days of código emagrecer de vez",
    fork: false,
    url: "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv",
    forks_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/forks",
    keys_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/teams",
    hooks_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/hooks",
    issue_events_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/events",
    assignees_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/tags",
    blobs_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/languages",
    stargazers_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/stargazers",
    contributors_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/contributors",
    subscribers_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/subscribers",
    subscription_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/subscription",
    commits_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/merges",
    archive_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/downloads",
    issues_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/labels{/name}",
    releases_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/tgmarinho/challenge-30-days-of-cedv/deployments",
    created_at: "2018-08-16T21:53:51Z",
    updated_at: "2018-11-27T14:55:38Z",
    pushed_at: "2018-11-27T14:55:36Z",
    git_url: "git://github.com/tgmarinho/challenge-30-days-of-cedv.git",
    ssh_url: "git@github.com:tgmarinho/challenge-30-days-of-cedv.git",
    clone_url: "https://github.com/tgmarinho/challenge-30-days-of-cedv.git",
    svn_url: "https://github.com/tgmarinho/challenge-30-days-of-cedv",
    homepage: "https://tgmarinho.github.io/challenge-30-days-of-cedv/",
    size: 2404,
    stargazers_count: 1,
    watchers_count: 1,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "master"
  },
  {
    id: 4675271,
    node_id: "MDEwOlJlcG9zaXRvcnk0Njc1Mjcx",
    name: "chat-rmi-d70",
    full_name: "tgmarinho/chat-rmi-d70",
    private: false,
    owner: {
      login: "tgmarinho",
      id: 380327,
      node_id: "MDQ6VXNlcjM4MDMyNw==",
      avatar_url: "https://avatars2.githubusercontent.com/u/380327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/tgmarinho",
      html_url: "https://github.com/tgmarinho",
      followers_url: "https://api.github.com/users/tgmarinho/followers",
      following_url:
        "https://api.github.com/users/tgmarinho/following{/other_user}",
      gists_url: "https://api.github.com/users/tgmarinho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/tgmarinho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/tgmarinho/subscriptions",
      organizations_url: "https://api.github.com/users/tgmarinho/orgs",
      repos_url: "https://api.github.com/users/tgmarinho/repos",
      events_url: "https://api.github.com/users/tgmarinho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/tgmarinho/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/tgmarinho/chat-rmi-d70",
    description:
      "Projeto de referência adaptado para entender o uso de RMI. Trabalho da faculdade, disciplina de PPSD (Processamento Paralelo e Sistemas Distribuídos)",
    fork: false,
    url: "https://api.github.com/repos/tgmarinho/chat-rmi-d70",
    forks_url: "https://api.github.com/repos/tgmarinho/chat-rmi-d70/forks",
    keys_url:
      "https://api.github.com/repos/tgmarinho/chat-rmi-d70/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tgmarinho/chat-rmi-d70/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/tgmarinho/chat-rmi-d70/teams",
    hooks_url: "https://api.github.com/repos/tgmarinho/chat-rmi-d70/hooks",
    issue_events_url:
      "https://api.github.com/repos/tgmarinho/chat-rmi-d70/issues/events{/number}",
    events_url: "https://api.github.com/repos/tgmarinho/chat-rmi-d70/events",
    assignees_url:
      "https://api.github.com/repos/tgmarinho/chat-rmi-d70/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tgmarinho/chat-rmi-d70/branches{/branch}",
    tags_url: "https://api.github.com/repos/tgmarinho/chat-rmi-d70/tags",
    blobs_url:
      "https://api.github.com/repos/tgmarinho/chat-rmi-d70/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/tgmarinho/chat-rmi-d70/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/tgmarinho/chat-rmi-d70/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/tgmarinho/chat-rmi-d70/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/tgmarinho/chat-rmi-d70/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/tgmarinho/chat-rmi-d70/languages",
    stargazers_url:
      "https://api.github.com/repos/tgmarinho/chat-rmi-d70/stargazers",
    contributors_url:
      "https://api.github.com/repos/tgmarinho/chat-rmi-d70/contributors",
    subscribers_url:
      "https://api.github.com/repos/tgmarinho/chat-rmi-d70/subscribers",
    subscription_url:
      "https://api.github.com/repos/tgmarinho/chat-rmi-d70/subscription",
    commits_url:
      "https://api.github.com/repos/tgmarinho/chat-rmi-d70/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/tgmarinho/chat-rmi-d70/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/tgmarinho/chat-rmi-d70/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/tgmarinho/chat-rmi-d70/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/tgmarinho/chat-rmi-d70/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/tgmarinho/chat-rmi-d70/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/tgmarinho/chat-rmi-d70/merges",
    archive_url:
      "https://api.github.com/repos/tgmarinho/chat-rmi-d70/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/tgmarinho/chat-rmi-d70/downloads",
    issues_url:
      "https://api.github.com/repos/tgmarinho/chat-rmi-d70/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/tgmarinho/chat-rmi-d70/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/tgmarinho/chat-rmi-d70/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/tgmarinho/chat-rmi-d70/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/tgmarinho/chat-rmi-d70/labels{/name}",
    releases_url:
      "https://api.github.com/repos/tgmarinho/chat-rmi-d70/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/tgmarinho/chat-rmi-d70/deployments",
    created_at: "2012-06-15T13:10:33Z",
    updated_at: "2014-01-31T02:46:11Z",
    pushed_at: "2012-06-15T13:59:19Z",
    git_url: "git://github.com/tgmarinho/chat-rmi-d70.git",
    ssh_url: "git@github.com:tgmarinho/chat-rmi-d70.git",
    clone_url: "https://github.com/tgmarinho/chat-rmi-d70.git",
    svn_url: "https://github.com/tgmarinho/chat-rmi-d70",
    homepage: null,
    size: 174,
    stargazers_count: 2,
    watchers_count: 2,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 2,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 2,
    open_issues: 0,
    watchers: 2,
    default_branch: "master"
  }
];

describe("Repositories Saga", () => {
  it("should be able to fetch repositories", async () => {
    const dispatched = [];

    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      getRepositories
    ).toPromise();

    expect(dispatched).toContainEqual(RepositoriesActions.getSuccess(response));
  });
});
