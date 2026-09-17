/* =========================
   STORY
========================= */

const storyData = [

    {
        title: "The Beginning ❤️",
        label: "16 JANUARY • 4:13 AM 🌷",
        text: `Shayad us tym mne bhi koni pata tha
ki ek chota sa purpose meri zindagi ka
itna khoobsurat hissa ban jega. ❤️`,
        image: "photos/Screenshot_20260915_164419_Gallery.jpg"
    },

    {
        title: "8 Months Later 🌸",
        label: "16 SEPTEMBER • 8 MONTHS",
        text: `Aaj 16 September hai…
or dekhte dekhte 8 months ho gee. 🌷`,
        image: "photos/Screenshot_20260916_145232_Gallery.jpg"
    },

    {
        title: "No Name, Yet So Special 🫀",
        label: "UNDERSTANDING • CARE • RESPECT",
        text: `Laddi is rishte ka koi naam beshak na ho
lekin jo understanding, care, respect,
love or sukoon isme milaa hai…
mere vaste vo kisi naam se kam koni. ❤️`,
        image: "photos/Screenshot_20260916_145721_Gallery.jpeg"
    },

    {
        title: "You Understood Me 🫂",
        label: "A LITTLE CONFESSION",
        text: `Kade bhi meri kmi ginakr glt koni btaya..
mujhe samjha.. sambhala or apnaya.

Sach me aap mne merte bhi jyada samjho ho. 🥺❤️`,
        image: "photos/Screenshot_20260916_145732_Gallery.jpg"
    },

    {
        title: "Your Smile 🌻",
        label: "ONE SIMPLE WISH",
        text: `Mai bss nyu chahu tham hamesha nyue haste
khush rhte mere samne raho.

Thari smile mere liye bahut special hai. 🫂`,
        image: "photos/Screenshot_20260916_145800_Gallery.jpg"
    },

    {
        title: "Happy 8 Months ❤️",
        label: "16 SEPTEMBER 2026 🌸",
        text: `Happy 8 Months anniversary to us
meri sabse special person. 🌸🥳

I love youu, I really miss uu nd 🥹

I will choose u today, tomorrow and every day. 🧿🌸`,
        image: "photos/Screenshot_20260916_150103_Gallery.jpg"
    }

];

let currentStory = 0;

function updateStory() {

    const story = storyData[currentStory];

    document.getElementById("storyCounter").textContent =
        `${currentStory + 1} / ${storyData.length}`;

    document.getElementById("storyLabel").textContent =
        story.label;

    document.getElementById("storyTitle").textContent =
        story.title;

    document.getElementById("storyText").textContent =
        story.text;

    document.getElementById("storyImage").src =
        story.image;
}


function startStory() {

    const storySection =
        document.getElementById("story");

    storySection.classList.add("active");

    storySection.scrollIntoView({
        behavior: "smooth"
    });

    currentStory = 0;

    updateStory();
}


function nextStory() {

    if (currentStory < storyData.length - 1) {

        currentStory++;

        updateStory();

    } else {

        document.getElementById("memories")
            .scrollIntoView({
                behavior: "smooth"
            });

    }

}


/* =========================
   ALBUM
========================= */

const albumPhotos = [

    "photos/Screenshot_20260916_150103_Gallery.jpg",
    "photos/Screenshot_20260916_145732_Gallery.jpg",
    "photos/Screenshot_20260916_145721_Gallery.jpeg",
    "photos/Screenshot_20260916_145432_Video Player.jpg",
    "photos/Screenshot_20260916_145422_Video Player.jpg",
    "photos/Screenshot_20260916_145313_Gallery.jpg",
    "photos/Screenshot_20260916_145304_Gallery.jpg",
    "photos/Screenshot_20260916_145232_Gallery.jpg",
    "photos/Screenshot_20260916_144749_Gallery.jpg",
    "photos/Screenshot_20260916_144840_Gallery.jpg",
    "photos/Screenshot_20260916_144802_Gallery.jpg",
    "photos/Screenshot_20260916_145028_Gallery.jpg",
    "photos/Screenshot_20260916_145046_Gallery.jpg"

];

const albumCaptions = [

    "One of those special moments ❤️",
    "A little memory 🌸",
    "Just us 🫀",
    "Another beautiful moment 🌷",
    "A moment worth remembering ❤️",
    "Somewhere between smiles and memories 🫂",
    "A simple moment, a special memory 🌻",
    "This one is special 🤌",
    "One more memory to keep 🧿",
    "Little moments, big feelings ❤️",
    "Always a beautiful memory 🌸",
    "Another page of our story 📖",
    "8 months of memories 🥹❤️"

];

let currentAlbumPhoto = 0;
let albumChanging = false;

function updateAlbum(animate = true) {

    const image =
        document.getElementById("albumImage");

    const counter =
        document.getElementById("albumCounter");

    const caption =
        document.getElementById("albumCaption");

    if (!image || !counter || !caption) {
        return;
    }

    if (!animate) {

        image.src =
            albumPhotos[currentAlbumPhoto];

        image.classList.remove("album-changing");
        image.classList.add("album-visible");

        counter.textContent =
            `${currentAlbumPhoto + 1} / ${albumPhotos.length}`;

        caption.textContent =
            albumCaptions[currentAlbumPhoto];

        updateAlbumDots();

        return;
    }

    if (albumChanging) {
        return;
    }

    albumChanging = true;

    const nextImage =
        albumPhotos[currentAlbumPhoto];

    const nextCaption =
        albumCaptions[currentAlbumPhoto];

    const finishChange = function () {

        image.src = nextImage;

        counter.textContent =
            `${currentAlbumPhoto + 1} / ${albumPhotos.length}`;

        caption.textContent =
            nextCaption;

        caption.classList.remove("caption-changing");

        requestAnimationFrame(function () {

            image.classList.remove("album-changing");
            image.classList.add("album-visible");

        });

        updateAlbumDots();

        setTimeout(function () {

            albumChanging = false;

        }, 1000);

    };

    image.classList.remove("album-visible");
    image.classList.add("album-changing");

    caption.classList.add("caption-changing");

    setTimeout(finishChange, 700);
}


function nextAlbumPhoto() {

    if (albumChanging) {
        return;
    }

    currentAlbumPhoto++;

    if (currentAlbumPhoto >= albumPhotos.length) {
        currentAlbumPhoto = 0;
    }

    updateAlbum(true);
}


function previousAlbumPhoto() {

    if (albumChanging) {
        return;
    }

    currentAlbumPhoto--;

    if (currentAlbumPhoto < 0) {
        currentAlbumPhoto = albumPhotos.length - 1;
    }

    updateAlbum(true);
}


function updateAlbumDots() {

    const dots =
        document.getElementById("albumDots");

    if (!dots) {
        return;
    }

    dots.innerHTML = "";

    albumPhotos.forEach(function (_, index) {

        const dot =
            document.createElement("span");

        dot.className = "album-dot";

        if (index === currentAlbumPhoto) {
            dot.classList.add("active");
        }

        dot.onclick = function () {

            if (albumChanging) {
                return;
            }

            currentAlbumPhoto = index;

            updateAlbum(true);

        };

        dots.appendChild(dot);

    });

}


/* Auto album slideshow */

setInterval(function () {

    const album =
        document.getElementById("memories");

    if (album) {
        nextAlbumPhoto();
    }

}, 3000);


/* =========================
   REASONS
========================= */

function openReasons() {

    const content =
        document.getElementById("reasonsContent");

    if (!content) {
        return;
    }

    content.classList.toggle("open");

}


/* =========================
   MESSAGE
========================= */

function openMessage() {

    const content =
        document.getElementById("messageContent");

    if (!content) {
        return;
    }

    content.classList.toggle("open");

}


/* =========================
   SECRET
========================= */

function openSecretNote() {

    const note =
        document.getElementById("secretNote");

    if (!note) {
        return;
    }

    note.classList.toggle("open");

}


/* =========================
   MUSIC
========================= */

const song =
    document.getElementById("ourSong");

const musicButton =
    document.getElementById("musicButton");

const musicStatus =
    document.getElementById("musicStatus");


function setMusicButton(text) {

    if (musicButton) {
        musicButton.innerHTML = text;
    }

}


function toggleMusic() {

    if (!song) {
        return;
    }

    if (song.paused) {

        song.play()
            .then(function () {

                setMusicButton("️my favorite voice note");

                musicStatus.classList.add("show");

            })
            .catch(function () {

                setMusicButton("my favourite music 🎵");

            });

    } else {

        song.pause();

        setMusicButton("my favourite music 🎵");

        musicStatus.classList.remove("show");

    }

}


song.addEventListener("play", function () {

    musicStatus.classList.add("show");

    setMusicButton("Pause ⏸️");

});


song.addEventListener("pause", function () {

    musicStatus.classList.remove("show");

});


/* =========================
   SECOND SONG
========================= */

let secondSongStarted = false;

song.addEventListener("ended", function () {

    if (!secondSongStarted) {

        secondSongStarted = true;

        song.src = "music/Sahil.mp3";

        song.play()
            .then(function () {

                setMusicButton("a voice message to my laddu");

                musicStatus.classList.add("show");

            })
            .catch(function () {

                setMusicButton("my favourite music 🎵");

            });

    } else {

        setMusicButton("my favourite music 🎵");

        musicStatus.classList.remove("show");

    }

});


/* =========================
   FLOATING PETALS
========================= */

setInterval(function () {

    const petal =
        document.createElement("div");

    petal.className = "petal";

    petal.textContent = "🌸";

    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    document.body.appendChild(petal);

    setTimeout(function () {

        petal.remove();

    }, 10000);

}, 1800);


/* =========================
   INITIALIZE
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateStory();

        updateAlbum(false);

    }
);
