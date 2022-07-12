var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/kevinjcroke/wordle-solver-gui', // Update to point to your repository
        user: {
            name: 'kevinjcroke', // update to use your name
            email: 'kcroke@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);