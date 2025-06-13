// Modal functionality for profile image
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const profilePhotoDiv = document.getElementById('profilePhoto');
    if (profilePhotoDiv) {
        profilePhotoDiv.addEventListener('click', () => {
            const imgSrc = profilePhotoDiv.querySelector('img').src;
            modalImg.src = imgSrc;
            modal.classList.add('active');
        });
    }
    if (modal) {
        modal.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    // Add click tracking (for analytics/demo)
    const links = document.querySelectorAll('a, .course-link');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Link clicked:', this.textContent || this.href);
        });
    });

    // Mobile/Desktop view toggle
    // Create buttons dynamically if not present in HTML
    let switcher = document.createElement('div');
    switcher.className = 'view-switcher';
    switcher.style.position = 'fixed';
    switcher.style.top = '10px';
    switcher.style.right = '10px';
    switcher.style.zIndex = '10000';
    switcher.style.gap = '5px';
    switcher.style.display = 'flex';

    // Style for buttons
    const btnStyle = "background:#2d3e50;color:#fff;border:none;padding:7px 13px;border-radius:3px;font-size:1em;cursor:pointer;opacity:0.85;margin-left:4px;";
    const mobileBtn = document.createElement('button');
    mobileBtn.textContent = 'Mobile View';
    mobileBtn.setAttribute('style', btnStyle);
    mobileBtn.title = "Switch to mobile view";

    const desktopBtn = document.createElement('button');
    desktopBtn.textContent = 'Desktop View';
    desktopBtn.setAttribute('style', btnStyle);
    desktopBtn.title = "Switch to desktop view";

    switcher.appendChild(mobileBtn);
    switcher.appendChild(desktopBtn);
    document.body.appendChild(switcher);

    // Functions to set viewport for mobile/desktop simulation
    function setMobileView() {
        let meta = document.querySelector('meta[name="viewport"]');
        if(!meta) {
            meta = document.createElement('meta');
            meta.name = "viewport";
            document.head.appendChild(meta);
        }
        meta.setAttribute('content', 'width=375, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
        // Add a class to body to allow css overrides if needed
        document.body.classList.add('force-mobile');
        document.body.classList.remove('force-desktop');
        highlightBtn();
    }

    function setDesktopView() {
        let meta = document.querySelector('meta[name="viewport"]');
        if(!meta) {
            meta = document.createElement('meta');
            meta.name = "viewport";
            document.head.appendChild(meta);
        }
        meta.setAttribute('content', 'width=1024, initial-scale=1.0');
        document.body.classList.add('force-desktop');
        document.body.classList.remove('force-mobile');
        highlightBtn();
    }

    mobileBtn.addEventListener('click', setMobileView);
    desktopBtn.addEventListener('click', setDesktopView);

    // Optionally: highlight current mode
    function highlightBtn() {
        if(document.body.classList.contains('force-mobile')) {
            mobileBtn.style.opacity = 1;
            desktopBtn.style.opacity = 0.5;
        } else if(document.body.classList.contains('force-desktop')) {
            desktopBtn.style.opacity = 1;
            mobileBtn.style.opacity = 0.5;
        } else {
            desktopBtn.style.opacity = 0.85;
            mobileBtn.style.opacity = 0.85;
        }
    }

    // Force desktop view on initial load
    setDesktopView();

    // Initial highlight
    highlightBtn();
});

// Example for future certificate modal (not used in current markup)
function showCertificate(certName, date) {
    alert(`Certificate: ${certName}\nCompleted: ${date}\n\nThis certificate has been verified and is available in your documents.`);
}
