// navbar
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

// panel 
const panels = document.querySelectorAll('.panel')

console.log(panels[1])

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    }) 
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

// testimonials 

const testimonialsContainer = document.querySelector('.testimonial-container')
const testimony = document.querySelector('.testimony')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username') 
const occupation = document.querySelector('.occupation')

const testimonials = [
    {
        name: 'Kanye South',
        job: 'Hamster Trainer',
        photo: 'https://randomuser.me/api/portraits/men/43.jpg', 
        text: "My experience at The Chop Shop was nothing short of exceptional. From the warm welcome at the door to the skilled technicians working on my car, every aspect of their service exceeded my expectations. The team at The Chop Shop showcased professionalism and expertise, making sure I understood the repairs needed and providing a detailed breakdown of the costs. It's rare to find an auto repair shop that combines top-notch service with integrity, and The Chop Shop does just that. I'm grateful for their dedication to excellence and highly recommend their services to anyone in need of reliable and honest car repairs.",
    },
    {
        name: 'Beyonce Coles',
        job: 'Body Builder',
        photo: 'https://randomuser.me/api/portraits/women/43.jpg', 
        text: "I couldn't be happier with the outstanding service I received at The Chop Shop! From the moment I walked in, the staff was incredibly welcoming and knowledgeable. They took the time to explain the necessary repairs in a way that I could understand, and the work was completed efficiently. The waiting area was clean and comfortable, making my experience even more pleasant. What sets The Chop Shop apart is their commitment to customer satisfaction. I left feeling confident in the quality of the service provided. I highly recommend The Chop Shop to anyone in need of reliable and friendly auto repair services!",
    },
    {
        name: 'Aubrey Graham',
        job: 'Unemployed',
        photo: 'https://randomuser.me/api/portraits/men/21.jpg', 
        text: "My visit to The Chop Shop was a complete disappointment. The customer service was lackluster, and the staff seemed disinterested in addressing my concerns. The repairs on my car took much longer than estimated, leaving me without a vehicle for an extended period. What's worse, when I finally got my car back, the issues persisted, and I had to return for further repairs. The lack of transparency about the costs added to my frustration. Overall, my experience with The Chop Shop was frustrating and inconvenient. I won't be recommending their services to anyone.",
    },
    {
        name: 'Vick Butts',
        job: 'Cashier',
        photo: 'https://randomuser.me/api/portraits/men/43.jpg', 
        text: "My experience at The Chop Shop was okay. The staff was friendly enough, and the service on my vehicle was completed within the expected timeframe. While they addressed the issues I brought in, there wasn't anything particularly exceptional about the experience. The waiting area was standard, and the overall atmosphere of the shop was decent. I appreciated the convenience of their location, but I can't say there was anything that stood out to make me overly impressed. It was a straightforward visit, and my car is running fine now.",
    },
    {
        name: 'Mary B. Poppin',
        job: 'Nurse',
        photo: 'https://randomuser.me/api/portraits/women/37.jpg', 
        text: "I recently took my car to The Chop Shop for some routine maintenance and was met with a mixed experience. On the positive side, the staff was friendly, and the waiting area was clean and comfortable. The service, however, took longer than expected, and there was a bit of confusion about the final bill. While the quality of the repairs seems decent, the overall process could use some improvement. I appreciate the efforts of the team, but there's room for enhancement in terms of efficiency and communication. I may consider giving them another chance, hoping for a smoother experience next time.",
    },   
] 

let idx = 1; 

function updateTestimonial() {
    const {name, job, photo, text} = testimonials[idx]

    testimony.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    occupation.innerHTML = job

    idx++

    if(idx > testimonials.length - 1) {
        idx = 0
    }
}

setInterval(updateTestimonial, 10000)