import React from "react";
import ResponsivePage from "./components/ResponsivePage";
import PostCard from "./components/PostCard";
function App() {
  const posts = [
    {
      type: "Article",
      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      author: "Siddharth Goyal",
      views: "1.4k",
      image:
        "https://s3-alpha-sig.figma.com/img/8f0b/5f52/59515bfc8d2d4ff8928be097376153e9?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LfycwbyFY61ODnYAkIT2yfoEVyy255PmkDhb8AVOvUKL4Z3wiU0RJZRlNqkXIIsXSGjmDjhDd09UfdIOIEPfoTfPIngr3w5w43Vpj3lBaWRXo7aX3Fk1PluOL8wuHpJRvYu9n2npop1babxXS7qEwIygxdnKBSGzru~BStt~vPGD00k9i1S4Sjc5FgKbTklfcI-p2F4ReoHwYgFLnzk-VnydXEuTpsAfwsMqaOLjyTjTGuM7p9UB9Hv~KfvFcZ~TuzEU11f~tW9hoJJhzmsWJ26wSweIEhNondoIeTIGjXP8AnT6iS8gJJRX8aw5zMa2CtajlAeBl1xvHRjsPh~z3A__",
    },
    {
      type: "Education",
      title:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
      author: "Siddharth Goyal",
      views: "1.4k",
      image:
        "https://s3-alpha-sig.figma.com/img/250a/24fe/c8e32137d06a7bb3fd57b6dfb4e07bfe?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b7RQ69rjQX1XvKBUG7gByUCuyP0X1FMN3vyEwIDipAdLnAoffvnCjPk~ef76vRyKjpMjR78rG7nd40r5GPzpNCAVDWJ41jy7plLSE0IdMDVw5vkFh0guV1iWtio273OUrPUG5LOvYIECaFgCRcLT9FdI97ImyNuhM7LzDZwzOoCsdaFQgxLNIozUlbpKi8vvP8Sj-Km6LqysY3G5UZm4-gCwnz6AiN0IUOZbDqJp2C60SGo83CoNh5GH2jXjrbUsLZAfnBZzVJwUpQT1pHN6s~QZPci0IWx-AIcuRuLpEXXtsynDYft0xv6iD29BejkDeLejp39sCPRx5PASJ7-KRA__", // replace with your image path
    },
  ];
  return (
    <div className="App">
      <ResponsivePage />
   
  
          <div className="posts">
            {posts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </div>
          
    </div>
  );
}

export default App;
