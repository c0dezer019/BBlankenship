class Project {
  name: string;
  description: string;
  screenshotURL: URL;
  tag: string;
  tech: Array<string>;
  github: string;
  demo: string;
  API: Array<string>;

  constructor(
    name: string,
    description: string,
    screenshotURL: URL,
    tag: string,
    tech: Array<string>,
    github: string,
    demo: string,
    API: Array<string> = []
  ) {
    this.name = name;
    this.description = description;
    this.screenshotURL = screenshotURL;
    this.tag = tag;
    this.tech = tech;
    this.github = github;
    this.demo = demo;
    this.API = API;
  }
}

export default Project;
