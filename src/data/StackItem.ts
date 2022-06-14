class StackItem {
  name: string;
  image: URL;
  imageAlt: string;

  constructor(name: string, image: URL, imageAlt: string) {
    this.name = name;
    this.image = image;
    this.imageAlt = imageAlt;
  }
}

export default StackItem;
