document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.getElementById("progress-bar");
    const loadingScreen = document.getElementById("loading-screen");
    const popup = document.getElementById("popup");
    let progress = 0;

    // Loading bar animation
    const loadingInterval = setInterval(() => {
        progress += 1;
        progressBar.style.width = progress + "%";

        if (progress >= 100) {
            clearInterval(loadingInterval);
            loadingScreen.classList.add("hidden");
            popup.classList.remove("hidden");
        }
    }, 50);
});

// Reveal the question popup
function revealMessage() {
    document.getElementById("popup").classList.add("hidden");
    document.getElementById("final-popup").classList.remove("hidden");
}

// Handle "Yes" button click
function yesMessage() {
    document.getElementById("final-popup").classList.add("hidden");
    document.getElementById("yes-popup").classList.remove("hidden");
}

// Handle "No" button click
function answerNo() {
    document.getElementById("final-popup").classList.add("hidden");
    document.getElementById("no-popup").classList.remove("hidden");
}

// Go back to the final popup
function goBack() {
    document.getElementById("no-popup").classList.add("hidden");
    document.getElementById("final-popup").classList.remove("hidden");
}

// More love ahead button click
function moreLove() {
    alert("More love and happiness ahead! 💖");
}

// Function to show the code input box when clicking "More love ahead"
function showCodeInput() {
    const codeContainer = document.getElementById("codeContainer");
    codeContainer.style.display = "block";
}

// Function to display the "Our Special Story" message
function showSpecialStory() {
    // Create the message container
    const messageContainer = document.createElement('div');
    messageContainer.id = 'specialStory';
    messageContainer.style.position = 'fixed';
    messageContainer.style.top = '50%';
    messageContainer.style.left = '50%';
    messageContainer.style.transform = 'translate(-50%, -50%)';
    messageContainer.style.backgroundColor = 'rgb(255, 255, 255)';
    messageContainer.style.borderRadius = '15px';
    messageContainer.style.padding = '20px';
    messageContainer.style.textAlign = 'center';
    messageContainer.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
    messageContainer.style.zIndex = '1000';

    // Add the content
    messageContainer.innerHTML = `
        <h2 style="color: #d43893;">I Love You Shree 💖</h2>
        <img src="../img/hand-holding.jpg" alt="Hands" style="width: 400px; border-radius: 50%; margin: 5px;">
        <p style="color: #7d1969;">You don't know how much i love you</p>
        <button onclick="closeSpecialStory()" style="background-color: #d43893; color: white; padding: 10px 20px; border: none; border-radius: 8px; cursor: pointer;">
            continue
        </button>
    `;

    // Append the message to the body
    document.body.appendChild(messageContainer);
}

// Function to close the "Our Special Story" message
function closeSpecialStory() {
    const messageContainer = document.getElementById('specialStory');
    if (messageContainer) {
        messageContainer.remove();
    }
}

// Trigger the function when clicking "More love ahead"
document.getElementById('moreLoveButton').addEventListener('click', showSpecialStory);

// Yes button logic
function yesMessage() {
    document.getElementById('final-popup').classList.add('hidden');
    document.getElementById('yes-popup').classList.remove('hidden');
}

// More love ahead button logic
function moreLove() {
    // Hide the previous love message
    document.getElementById('yes-popup').classList.add('hidden');
    // Show the "Our Special Story" message
    document.getElementById('special-story-popup').classList.remove('hidden');
}

// Open the special message (final message)
function openStory() {
    // Hide the "Our Special Story" message
    document.getElementById('special-story-popup').classList.add('hidden');
    // Show the final heartfelt message
    document.getElementById('specialMessage').classList.remove('hidden');
}

// Close the special message
function closeSpecialMessage() {
    const messageContainer = document.getElementById('specialMessage');
    if (messageContainer) {
        messageContainer.remove();
    }
}

// Function to display "Our Story Continues"
function showStoryContinues() {
    // Create the message container
    const storyContainer = document.createElement('div');
    storyContainer.id = 'storyContinues';
    storyContainer.style.position = 'fixed';
    storyContainer.style.top = '50%';
    storyContainer.style.left = '50%';
    storyContainer.style.transform = 'translate(-50%, -50%)';
    storyContainer.style.backgroundColor = '#ffdfdf';
    storyContainer.style.borderRadius = '15px';
    storyContainer.style.padding = '30px';
    storyContainer.style.textAlign = 'center';
    storyContainer.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
    storyContainer.style.zIndex = '1000';
    storyContainer.style.width = '80%';
    storyContainer.style.maxWidth = '600px';

    // Add the content
    storyContainer.innerHTML = `
        <h2 style="color: #d43893;">Our Story Continues...</h2>
        <p style="color: #333; font-size: 18px;">Every moment we share is another step in our beautiful journey, and I can’t imagine taking any of those steps without you by my side. I want to create more memories, more stories, and build a life together.

Shree, will you stay with me—always?  💖</p>
        <div style="margin: 10px;"><span style="font-size: 30px;">❤️</span></div>
        <button onclick="location.reload()" style="margin-top: 10px; background-color: #e74c3c; color: white; padding: 8px 20px; border: none; border-radius: 8px; cursor: pointer;">
            Start Over
        </button>
    `;

    // Append the message to the body
    document.body.appendChild(storyContainer);
}

// Function to close the "A Special Message"
function closeSpecialMessage() {
    const messageContainer = document.getElementById('specialMessage');
    if (messageContainer) {
        messageContainer.remove();
        showStoryContinues(); // Show the next message after closing
    }
}

// Trigger the function when clicking "Open Our Story"
document.getElementById('openStoryButton').addEventListener('click', showSpecialMessage);
