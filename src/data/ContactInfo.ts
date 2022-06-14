class ContactInfo {
  username: string;
  contactUrl: URL;
  image: string;
  imageAlt: string;

  constructor(
    username: string,
    contactUrl: URL,
    image: string,
    imageAlt: string
  ) {
    this.username = username;
    this.contactUrl = contactUrl;
    this.image = image;
    this.imageAlt = imageAlt;
  }
}

export default ContactInfo;
