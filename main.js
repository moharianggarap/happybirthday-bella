 // Replace from & for in card
    const urlParams = new URLSearchParams(window.location.search);
    const from = urlParams.get('from');
    const to = urlParams.get('for');

    if (to) {
      document.querySelector('.cardInside p:nth-of-type(1)').textContent = `Dear ${to},`;
    }

    if (from) {
      document.querySelector('.name').textContent = from;
    }

    // Generate shareable link
    function generateLink() {
      const toName = prompt("Enter your name:");
      const fromName = prompt("Enter recipient name:");

      if (fromName && toName) {
        const currentURL = window.location.origin + window.location.pathname;
        const generatedLink = `${currentURL}?from=${encodeURIComponent(toName)}&for=${encodeURIComponent(fromName)}`;
        const linkOutput = document.getElementById('linkOutput');
        linkOutput.innerHTML = `Your link: <a href="${generatedLink}" target="_blank">${generatedLink}</a>`;
        linkOutput.style.display = 'block';
      }
    }