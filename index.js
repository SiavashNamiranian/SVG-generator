const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([



        {
            type: 'checkbox',
            message: 'please choose the background shape of your logo from following selection',
            name: '<',
            choices: ['Triangle', 'Circle', 'Square'],
        },


    ])

    .then((response) => {
        var response = JSON.stringify(response);
        response = response.replace(/["`\]:<{}[.']/g, '');
        console.log(response === 'Triangle');

        if (response === 'Triangle') {
            fs.appendFile('./examples/logo.svg', '<svg version="1.1" width="300" height="200">\n<polygon points=', (err) =>
                err ? console.log(err) : console.log('successful'))
            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'please enter `Three` x,y coordinate pairs in the following format x1. y1 x2, y2 x3, y3',
                        name: '<',
                    },
                ])
                .then((response) => {
                    var response = JSON.stringify(response);
                    fs.appendFile('./examples/logo.svg', response.replace(/({"<":)|(})/g, ''), () =>
                        inquirer
                            .prompt([
                                {
                                    type: 'input',
                                    message: 'please specify the color of your Triangle using color name or hexadecimal value',
                                    name: 'fill=',
                                },
                            ])
                            .then((response) => {
                                var response = JSON.stringify(response);
                                fs.appendFile('./examples/logo.svg', response.replace(/({")|(":)|(})/g, '') + ("/>"), () =>
                                inquirer
                                .prompt([
                                    {

                                        type: 'input',
                                        message: 'please specify the logo text location from left margin',
                                        name: '<text x=',
                                    },
                                    {
                                        type: 'input',
                                        message: 'please specify the logo text location from top',
                                        name: ' y=',
                                    },
                                    {
                                        type: 'input',
                                        message: 'please specify the logo text font size',
                                        name: ' font-size=',
                                    },
                                    {
                                        type: 'input',
                                        message: 'please specify the logo text anchor (start, middle, end)',
                                        name: ' text-anchor=',
                                    },
                                    {
                                        type: 'input',
                                        message: 'please specify the logo text color',
                                        name: ' fill=',
                                    },
                                    {
                                        type: 'input',
                                        message: 'please specify the logo text Three letter',
                                        name: '>input',
                                    },


                                 ])
                                .then((response) => {
                                    var response = JSON.stringify(response);
                                    fs.appendFile('./examples/logo.svg', response.replace(/({")|(":)|("})|(,")|(input":")/g,'')+('</text>'), (err) =>
                                        err ? console.log(err) : console.log('successful'))
                                }),
                    )}))
                })


        } else if (response === 'Square') {
            fs.appendFile('./examples/logo.svg', '<svg version="1.1" width="300" height="200">\n<rect', (err) =>
                err ? console.log(err) : console.log('successful'))
            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'please enter a value to specify distance between top left corner of square and left margin',
                        name: ' x=',
                    },
                    {
                        type: 'input',
                        message: 'please enter a value to specify distance between top left corner of square and top margin',
                        name: 'y=',
                    },
                    {
                        type: 'input',
                        message: 'please specify the color of your square using color name or hexadecimal value',
                        name: 'fill=',
                    },

                ])
                .then((response) => {
                    var response = JSON.stringify(response);
                    fs.appendFile('./examples/logo.svg', response.replace(/({")|(":)|(})|(,")/g,' '), () =>
                        inquirer
                            .prompt([
                                {
                                    type: 'input',
                                    message: 'please enter a value < or = 200 for your square',
                                    name: '<',
                                },
                            ])
                            .then((response) => {
                                var response = JSON.stringify(response);
                                fs.appendFile('./examples/logo.svg', (' width=') + response.replace(/({"<":)|(})/g,'') + (' height=') + response.replace(/({"<":)|(})/g,'') + ('/>\n'), () =>
                                inquirer
                                .prompt([
                                    {

                                        type: 'input',
                                        message: 'please specify the logo text location from left margin',
                                        name: '<text x=',
                                    },
                                    {
                                        type: 'input',
                                        message: 'please specify the logo text location from top',
                                        name: ' y=',
                                    },
                                    {
                                        type: 'input',
                                        message: 'please specify the logo text font size',
                                        name: ' font-size=',
                                    },
                                    {
                                        type: 'input',
                                        message: 'please specify the logo text anchor (start, middle, end)',
                                        name: ' text-anchor=',
                                    },
                                    {
                                        type: 'input',
                                        message: 'please specify the logo text color',
                                        name: ' fill=',
                                    },
                                    {
                                        type: 'input',
                                        message: 'please specify the logo text Three letter',
                                        name: '>input',
                                    },


                                 ])
                                .then((response) => {
                                    var response = JSON.stringify(response);
                                    fs.appendFile('./examples/logo.svg', response.replace(/({")|(":)|("})|(,")|(input":")/g,'')+('</text>'), (err) =>
                                        err ? console.log(err) : console.log('successful'))
                                }),
                    )}))
                })
        } else {
            fs.appendFile('./examples/logo.svg', '<svg version="1.1" width="300" height="200">\n<circle Cx=', () =>
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            message: 'please a number to specify your Circle center distance from left page margin',
                            name: '<',
                        },
                    ])
                    .then((response) => {
                        var response = JSON.stringify(response);
                        fs.appendFile('./examples/logo.svg', response.replace(/({"<":)|(})/g, '') + ("\tCy="), () =>
                            inquirer
                                .prompt([
                                    {
                                        type: 'input',
                                        message: 'please a number to specify your Circle center distance from top of the page margin',
                                        name: '<',
                                    },
                                ])
                                .then((response) => {
                                    var response = JSON.stringify(response);
                                    fs.appendFile('./examples/logo.svg', response.replace(/({"<":)|(})/g, '') + ("\tr="), () => inquirer
                                        .prompt([
                                            {
                                                type: 'input',
                                                message: 'please a number to specify a value for radius',
                                                name: '<',
                                            },
                                        ])
                                        .then((response) => {
                                            var response = JSON.stringify(response);
                                            fs.appendFile('./examples/logo.svg', response.replace(/({"<":)|(})/g, '') + ('\tfill='), () =>
                                                inquirer
                                                    .prompt([
                                                        {
                                                            type: 'input',
                                                            message: 'please specify the color of your circle using color name or hexadecimal value',
                                                            name: '<',
                                                        },
                                                    ])
                                                    .then((response) => {
                                                        var response = JSON.stringify(response);
                                                        fs.appendFile('./examples/logo.svg', response.replace(/({")|(":)|(})|(<)/g, '') + ("/>\n"), () =>
                                                            inquirer
                                                                .prompt([
                                                                    {

                                                                        type: 'input',
                                                                        message: 'please specify the logo text location from left margin',
                                                                        name: '<text x=',
                                                                    },
                                                                    {
                                                                        type: 'input',
                                                                        message: 'please specify the logo text location from top',
                                                                        name: ' y=',
                                                                    },
                                                                    {
                                                                        type: 'input',
                                                                        message: 'please specify the logo text font size',
                                                                        name: ' font-size=',
                                                                    },
                                                                    {
                                                                        type: 'input',
                                                                        message: 'please specify the logo text anchor (start, middle, end)',
                                                                        name: ' text-anchor=',
                                                                    },
                                                                    {
                                                                        type: 'input',
                                                                        message: 'please specify the logo text color',
                                                                        name: ' fill=',
                                                                    },
                                                                    {
                                                                        type: 'input',
                                                                        message: 'please specify the logo text Three letter',
                                                                        name: '>input',
                                                                    },


                                                                 ])
                                                                .then((response) => {
                                                                    var response = JSON.stringify(response);
                                                                    fs.appendFile('./examples/logo.svg', response.replace(/({")|(":)|("})|(,")|(input":")/g,'')+('</text>'), (err) =>
                                                                        err ? console.log(err) : console.log('successful'))
                                                                }),

                                        )}))
                                })
                        )
                    }))
        })
    )}})
