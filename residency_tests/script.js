console.log("connected");

const quizDiv = document.getElementById("quiz");

//generate random sequence
const generateRandomSequence = (length) =>{
    let randomArray = [];
    let counter = 0;
    while(counter < length){
        let randNum = Math.floor(Math.random()*length+1);
        if (randomArray.indexOf(randNum) == -1){
            randomArray.push(randNum);
            counter++;
        }
    }
    return randomArray;
}


// dynamically creating quiz from json data, ordering of questions and answers in questions ar always random
const drawQuiz = (randomSequence, data) => {
    for (let num of randomSequence){
        
        let questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.setAttribute('id', `question${num}`);

        let lengthOfAnswers = data[num]['answers'].length;
        let randomAnswerSequence = generateRandomSequence(lengthOfAnswers);
        
        let question = document.createElement("h5");
        question.innerText = data[num]['question'];
        questionDiv.appendChild(question);
        
        
        for (let elem of randomAnswerSequence){
            questionDiv.innerHTML+=`<p><label><input type="radio" class="answer" name="question${num}" id="question${num}answer${elem}" > ${data[num]['answers'][elem-1]['answer']}</label></p>`
        }

        quizDiv.appendChild(questionDiv);
        
        
    }
}


// get tests
const request = async () => {
    const response = await fetch('./files/sampleTests.json');
    const json = await response.json();
    return json;
}




// main function
const main = async () => {
    //save tests in variable
    const data = await request();

    // question count
    const lengthOfData = Object.keys(data).length;

    
    // for debugging purposes
    for (let nums of Object.entries(data)){
        console.log(nums);
    }

    
    // generate random sequence
    let randomSequence = generateRandomSequence(lengthOfData);
    
    // create a quiz
    drawQuiz(randomSequence,data);
    
    // add a button at the end to submit answer
    quizDiv.innerHTML += `<button class="btn btn-success">Submit</button>`



    

    /* 
        ====================================
        submitting answers
        I wanted this to be a function, but couldn't manage to pass data as parameter in event listener
        it's not yet complete and be be rewritten from scratch
        ====================================
    */
    document.getElementsByTagName('button')[0].addEventListener('click', () => {
        // console.log(typeof quizDiv, quizDiv);

        // getting all question divs
        let questionDivs = quizDiv.getElementsByTagName('div')
        let chosenAnswers = [];
        for (let i=0; i<questionDivs.length; i++){
            let questionNumber = questionDivs[i].getAttribute('id').substr(-1);
            
            // gettint all options from each div
            let radioButtons = questionDivs[i].getElementsByTagName('input');

            for (let j=0; j<radioButtons.length; j++){
                // getting answer's number for further checking
                let chosen = radioButtons[j].id.substr(-1)
                if (radioButtons[j].checked){
                    //pushing submitted answers to the array
                    chosenAnswers.push({question:questionNumber, chosenAnswer:chosen});
                } 
            }
        }

        // console.log(chosenAnswers);


        //remove background after different answer is selected
        let allAnswers = document.getElementsByClassName('answer');

        for (element of allAnswers){
            //first parent node is a label tag the second one is paragraph tag which is the one we need to add or remove background
            if ((element.parentNode.parentNode.classList.contains('true') || element.parentNode.parentNode.classList.contains('false')) && element.checked == false){
                // console.log(element)
                element.parentNode.parentNode.classList.remove('false');
                element.parentNode.parentNode.classList.remove('true');
            }
            
        }

        //green background if true, red if false;
        for (elem of chosenAnswers){
            // console.log(`question${elem.question}answer${elem.chosenAnswer}`);
            
            if (data[elem.question]['answers'][elem.chosenAnswer-1]['isTrue'] == 'true'){
                document.getElementById(`question${elem.question}answer${elem.chosenAnswer}`).parentNode.parentNode.classList.add('true');
            } else {
                document.getElementById(`question${elem.question}answer${elem.chosenAnswer}`).parentNode.parentNode.classList.add('false');
            }
        }
    });

    /*
        ===========================
        end of answer submission functionality
        ===========================
    */

}

//running the main function
main();

