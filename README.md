# Select-Component
## Projet 14 du parcours Javascript react chez Openclassrooms

Liens:
    [Adresse du projet sur Github](https://github.com/Foxy-WhiteTrack/select-component).
    [Adresse du projet sur npm](https://www.npmjs.com/package/ot-select-component).

## Commandes disponible après téléchargement:

### `npm start`

### `npm run build`

## Etapes et process pour la création de ce composant:

- npx create-react-app ot-select-component
- npm install react react-dom --save
- npm install --save-dev @babel/core @babel/cli babel-preset-react-app @babel/preset-react cross-env
- npm install rimraf --save-dev

- creation de .babelrc
- creation de .eslintrc.json

- npm run build

### Mise à jour du composant
```
npm run build
git add .
git commit -a -m "Mise à jour du package"
git push
npm version patch 
npm publish --access public
```

### Exemple d'Utilisation

```
import React, { useState } from 'react';
import Select from './lib/components/Select';

import { datas } from "./lib/datas/datas";

export default function App() {

    const firstState = datas[0].abbreviation;

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        startDate: "",
        street: "",
        city: "",
        state: firstState,
        zipCode: "",
    })

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="App">
            <Select
                id="state"
                label="State"
                options={datas}
                haveLabel={true}
                name="state"
                value={formData.state}
                onChange={onChange}
            />
        </div>
    );
}

```

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
