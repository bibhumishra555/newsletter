const resources = [
    {
        category: "International",
        links: [
            { name: "The Guardian", url: "https://www.theguardian.com/international" },
            { name: "Washington Post", url: "https://www..com/" },
            { name: "Fox News", url: "https://www.foxnews.com/" },
            { name: "CNN", url: "https://edition.cnn.com/" },
            { name: "Reuters", url: "https://www.reuters.com/" },
            { name: "Aljazeera", url: "https://www.aljazeera.com/" },
            { name: "The Jakartapost", url: "https://www.thejakartapost.com/" },
            { name: "Dawn", url: "https://www.dawn.com/" }
        ],
        animationClass: 'International-animate'
    },
    {
        category: "National",
        links: [
            { name: "ANI", url: "https://aninews.in/" },
            { name: "Indian Express", url: "https://indianexpress.com/" },
            { name: "Times of India", url: "https://timesofindia.indiatimes.com/" },
            { name: "Hindustan Times", url: "https://www.hindustantimes.com/" },
            { name: "PTI", url: "https://www.ptinews.com/home" },
            { name: "PIB", url: "https://pib.gov.in/" } 
        ],
        animationClass: 'National-animate'
    },
    {
        category: "Magazine",
        links: [
            { name: "Github", url: "https://github.com/" },
            { name: "Geeks for Geeks", url: "https://www.geeksforgeeks.org" },
            { name: "Chat GPT", url: "https://chat.openai.com/" },
            { name: "Co-pilot", url: "https://copilot.microsoft.com/?showconv=1" },
            { name: "Unsplash", url: "https://unsplash.com/" },
            { name: "Web Dev", url: "https://web.dev/" },
            { name: "Leet Code", url: "https://leetcode.com/" },
            { name: "Online Linux Server", url: "https://acceleratron.in/vm-linux-terminal" }
        ],
        animationClass: 'Magazine-animate'
    }
];

function createResourceSection(category, links, animationClass) {
    const section = document.createElement('div');
    section.className = `classification-container ${animationClass}`;

    const title = document.createElement('h2');
    title.textContent = category;
    section.appendChild(title);

    const list = document.createElement('ul');
    list.className = 'link-list';
    
    links.forEach(link => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.textContent = link.name;
        listItem.appendChild(anchor);
        list.appendChild(listItem);
    });

    section.appendChild(list);
    return section;
}

const classificationDiv = document.getElementById('classification');
resources.forEach(resource => {
    const resourceSection = createResourceSection(resource.category, resource.links, resource.animationClass);
    classificationDiv.appendChild(resourceSection);
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.classification-container');
    sections.forEach(section => {
        section.style.opacity = '1';
    });
});
