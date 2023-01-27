//  Begining of Script//
const quote = document.getElementById("post")

/* using ellipsis to truncate text to certain length  refer the link for further understanding
https://stackoverflow.com/questions/4700226/i-want-to-truncate-a-text-or-line-with-ellipsis-using-javascript*/
const truncate = (input, length) => input.length > 5 ? `${input.substring(0, length ? length : 100)}...` : input;


function Quotes(){
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
    .then(data => {
        //  using for loop to genrate cards and asssigning random images to cards//
        for (let index = 0; index < data.length; index++) {
            // adding 1+ to the expression to avoid 0 as a result in math.random() function.This will avoid void blanks//
            let randomNumber =1+ Math.floor(Math.random()*10)
            const element = data[index];
            quote.innerHTML += `<div class="card_item">
            <div class="card_inner">
              <div class="card_top">
                <img src="./images/${randomNumber}.jpg" id="random" alt="Random image" />
              </div>
              <div class="card_bottom">
                <div class="card_category">
                  Travel
                </div>
                <div class="card_info">
                  <p class="title">${truncate(element.title, 20)}</p>
                  <p>
                    ${truncate(element.body)}
                  </p>
                </div>
                <div class="card_creator">
                  By Kishore Kumar
                </div>
              </div>
            </div>
           </div>`
        }
    })
}

Quotes();


