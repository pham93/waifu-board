import { v4 as uuidv4 } from "uuid";

export enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "GAY"
}

export interface Waifu {
  id?: string;
  firstName: string;
  lastName: string;
  age: number;
  img?: string;
  gender: Gender;
}

export const getDefaultWaifus = [
  {
    firstName: "Nana",
    lastName: "Komatsu",
    age: 24,
    img: "https://asianwiki.com/images/c/ca/Nana_Komatsu-p001.jpg",
    gender: Gender.FEMALE
  },
  {
    firstName: "Jisoo",
    lastName: "Kim",
    age: 25,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/61TdnhxTC%2BL._SL1032_.jpg",
    gender: Gender.FEMALE
  },
  {
    firstName: "Lisa",
    lastName: "Komatsu",
    age: 23,
    img:
      "https://img1.nickiswift.com/img/gallery/the-untold-truth-of-lisa-from-blackpink/intro-1579880811.jpg",
    gender: Gender.FEMALE
  },
  {
    firstName: "Satomi",
    lastName: "Ishihara",
    age: 33,
    img:
      "https://aramajapan.com/wp-content/uploads/2020/10/aramajapan.com-satomi-ishihara-is-married-satomi-ishihara-is-married.jpg",
    gender: Gender.FEMALE
  },
  {
    firstName: "Kanna",
    lastName: "Hashimoto",
    age: 33,
    img:
      "https://actressfact.com/wp-content/uploads/2020/04/Hashimoto_Kanna.jpg",
    gender: Gender.FEMALE
  },
  {
    firstName: "Tzu-yu",
    lastName: "Chou",
    age: 21,
    img:
      "https://upload.wikimedia.org/wikipedia/commons/c/cd/Chou_Tzuyu_at_the_Golden_Disc_Awards_2019.png",
    gender: Gender.FEMALE
  },
  {
    firstName: "Momo",
    lastName: "Hirai",
    age: 23,
    img:
      "https://www.allkpop.com/upload/2019/11/content/081059/1573228758-happy-happy-momo-profile.jpg",
    gender: Gender.FEMALE
  },
  {
    firstName: "Xiao",
    lastName: "Cheng",
    age: 22,
    img:
      "https://upload.wikimedia.org/wikipedia/commons/5/59/180317_%EC%9A%B0%EC%A3%BC%EC%86%8C%EB%85%80_%EB%AF%B8%EB%8B%88%ED%8C%AC%EB%AF%B8%ED%8C%85_%EC%A7%81%EC%B0%8D_%2819%29_%28cropped%29.jpg",
    gender: Gender.FEMALE
  }
].map((e) => ({ ...e, id: uuidv4() }));
