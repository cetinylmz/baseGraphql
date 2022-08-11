const users = [
  {
    id: "1",
    fullName: "Mehmet Seven",
  },
  {
    id: "2",
    fullName: "Çetin baş",
  },
];

const posts = [
  {
    id: "1",
    title: "Başık Bilgisiyar Markaları",
    userId: "1",
  },
  {
    id: "2",
    title: "Başlık Şehir ismleri",
    userId: "2",
  },
  {
    id: "3",
    title: "Başlık Renk İsimleri",
    userId: "1",
  },
];

const comments = [
    {
        id:"1",
        text:'ankara',
        postId:"2",
        userId:"1",

    },
    {
        id:"1",
        text:'Hp notebook',
        postId:"1",
        userId:"2",
    },
    {
        id:"2",
        text:'İstanbul',
        postId:"2",
        userId:"2",
    },
    {
        id:"3",
        text:'sarı',
        postId:"3",
        userId:"2",
    }
];


module.exports = {users,  posts , comments}