# Portfolio Project 1: Sports Fun Facts

## Description

This project contains a JavaScript program (`script.js`) that generates random fun facts about sports. The purpose of this project is to provide users with interesting and entertaining information about various sports.

## Features

- Generates random fun facts about different sports.
- Easy to integrate into any web project.
- Lightweight and fast.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/jopierreht/sport-fun-facts.git
    ```
2. Navigate to the project directory:
    ```bash 
    cd sport-fun-facts
    ```

## Usage

1. Include the `script.js` file in your HTML:
    ```html
    <script src="path/to/script.js"></script>
    ```
2. Call the function to generate a random sports fun fact:
    ```javascript
    const funFact = getRandomSportsFunFact();
    console.log(funFact);
    ```

## Example

Here is an example of how to use the script in an HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Sports Fun Facts</title>
    <script src="script.js" defer></script>
</head>
<body>
    <h1>Random Sports Fun Fact</h1>
    <p id="fun-fact"></p>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const funFact = getRandomSportsFunFact();
            document.getElementById('fun-fact').textContent = funFact;
        });
    </script>
</body>
</html>
```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, please open an issue or contact me at [hola@briye.co](mailto:hola@briye.co).
