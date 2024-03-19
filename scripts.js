const cards = [
    [
        "A boy's name",
        "Countries",
        "School supplies",
        "Breakfast foods",
        "TV shows",
        "Product names",
    ],
    [
        "Places",
        "Animals/birds",
        "Games",
        "Actors/actresses",
        "Colours",
        "World records",
    ],
    [
        "Authors",
        "Ways to get from here to there",
        "Flowers",
        "Baby foods",
        "Things found in a desk",
        "Diseases",
    ],
    [
        "Things used in an office",
        "Things that are cold",
        "Breakfast foods",
        "Things found in a society",
        "Leaders/politicians",
        "Gifts/presents",
    ],
    [
        "Things that grow",
        "Companies",
        "Articles of clothing",
        "4-letter words",
        "Items in a refrigerator",
        "Street names",
    ],
    [
        "Things you keep hidden",
        "Items in a suitcase",
        "Sports equipment",
        "Things that are sticky",
        "Awards/ceremonies",
        "Bad habits",
    ],
    [
        "Name of book/magazine",
        "Menu items",
        "Book titles",
        "Vehicles",
        "Restaurants",
        "Fruits/vegetables",
    ],
    [
        "Academic subjects",
        "Ice cream flavours",
        "TV stars",
        "Things that are round",
        "Things in a park",
        "Musical instruments",
    ],
    [
        "Store names",
        "Sports",
        "Dairy products",
        "Things in your purse/wallet",
        "Excuses for being late",
        "Things you replace",
    ],
    [
        "Hobbies",
        "Things found in an ocean",
        "Junk food",
        "Desserts",
        "Things found on a map",
        "Athletes",
    ],
    [
        "Farm animals",
        "Tools",
        "Heroes",
        "Kinds of dances",
        "Tropical locations",
        "Things in a souvenir shop",
    ],
    [
        "Song titles",
        "Items in a kitchen",
        "Vacation spots",
        "Capitals",
        "Occupation",
        "Cartoon characters",
    ],
    [
        "Things in the sky",
        "Things that have spots",
        "Something you are afraid of",
        "Fictional characters",
        "Kinds of candy",
        "Items you save up to buy",
    ],
    [
        "Things at a beach",
        "Things that jump/bounce",
        "Things that are black",
        "Nicknames",
        "Names of schools/colleges/universities",
        "Street names",
    ],
    [
        "Reptiles/amphibians",
        "Parks",
        "Leisure activities",
        "Things in a cabinet",
        "Toys",
        "Household chores",
    ],
    [
        "Famous females",
        "Things made of metal",
        "People in uniform",
        "Things you plug in",
        "Languages",
        "Mythological characters",
    ],
    [
        "Words associated with money",
        "Movie titles",
        "Things you wear",
        "Things at a circus",
        "Musical groups",
        "Vehicle parts",
    ],
    [
        "Vegetables",
        "Medicines/drugs",
        "Fish",
        "Items in a catalogue",
        "Things you throw away",
        "Foreign cities",
    ],
    [
        "Things you shout",
        "Gods",
        "Parts of body",
        "Food stuff",
        "Celebrities",
        "A girl's name",
    ],
    [
        "Things at a cricket game",
        "Personality traits",
        "Things with tails",
        "Spices/herbs",
        "Cooking utensils",
        "Villains/monsters",
    ],
];
const button = document.getElementById("next-button");
const letter = document.getElementById("Letter");
const card = document.getElementById("Card");
const countdown = document.getElementById("countdown");
const topics = document.getElementById("topics");
const countdown_audio_normal = new Audio("beep-07a.mp3");
const countdown_audio_last = new Audio("beep-04.mp3");
const timer_end_audio = new Audio("timer-end.mp3");
const timer = document.getElementById("display-time");

button.addEventListener("click", beginRound);

async function beginRound() {
    topics.innerHTML = "";
    let round_card = cards[Math.floor(Math.random() * cards.length)];
    await showRandomLetters();
    await countdown_func(show_topics); //function must be passed as an argument because setInterval() has to run it, await/async does not work for setInterval()

    async function countdown_func(topics_func) {
        topics.style.display = "none";
        countdown.style.display = "block";

        async function StartCountdown(seconds) {
            let counter = seconds;
            const interval = setInterval(() => {
                if (counter === 0) {
                    clearInterval(interval);
                    countdown_audio_last.play();
                    topics_func();
                    counter = 3;
                }
                countdown.innerHTML = counter;
                countdown_audio_normal.play();
                counter--;
            }, 1000);
            return "complete";
        }
        await StartCountdown(3);
    }

    async function showRandomLetters() {
        theLetters = "ABCDEFGHIJKLMNOPQRSTUVQXYZ";
        counter = 0;
        loopCount = 60;
        async function showing() {
            setInterval(() => {
                if (++counter <= loopCount) {
                    letter.innerHTML = theLetters.charAt(
                        Math.floor(theLetters.length * Math.random())
                    );
                    counter++;
                } else {
                    clearInterval();
                }
            }, 50);
            return "Complete";
        }
        await showing();
        console.log("Completed showRandomLetters");
    }

    async function show_topics() {
        //Create list in card and show topics
        countdown.style.display = "none";
        for (let topic of round_card) {
            let list_item = document.createElement("li");
            list_item.innerHTML = topic;
            topics.appendChild(list_item);
        }
        topics.style.display = "block";

        remaining_time = 8;

        const timer_countdown = setInterval(() => {
            remaining_time--;
            timer.innerHTML = remaining_time;

            if (remaining_time <= 0) {
                timer_end_audio.play();
                clearInterval(timer_countdown);
            }
        }, 1000);
    }
}
