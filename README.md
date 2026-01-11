# Diablo 4 Build Planner

A comprehensive web-based build planner for Diablo 4, allowing players to create, save, and share their character builds.

## Features

### Core Functionality
- **5 Playable Classes**: Barbarian, Druid, Necromancer, Rogue, Sorcerer
- **Skill Tree System**: Allocate up to 58 skill points across multiple skill categories
- **Equipment Management**: Plan your gear across 10 equipment slots
- **Character Stats**: Track your character's core statistics
- **Build Persistence**: Save builds to local storage
- **Import/Export**: Export builds as JSON files
- **Share Builds**: Generate shareable URLs to share builds with others

### Skill Categories
Each class has access to:
- Basic Skills
- Core Skills
- Defensive Skills
- Brawling/Utility Skills
- Weapon Mastery Skills
- Ultimate Skills
- Key Passive Skills

### Equipment Slots
- Helm
- Chest Armor
- Gloves
- Pants
- Boots
- Amulet
- Ring (x2)
- Weapon
- Off-hand

## Getting Started

### Installation

1. Clone or download this repository
2. Open `index.html` in a modern web browser
3. No build process or dependencies required!

### Usage

#### Creating a Build

1. **Select Your Class**: Choose from one of the 5 available classes on the initial screen
2. **Allocate Skills**: Click the + and - buttons to add or remove skill points
3. **Equip Gear**: Click on any gear slot to add items
4. **Name Your Build**: Enter a descriptive name in the build name field
5. **Save**: Click the "Save" button to store your build locally

#### Managing Builds

- **Save Build**: Stores the current build to browser local storage
- **Load Build**: Opens a dialog showing all saved builds
- **Export Build**: Downloads the build as a JSON file
- **Share Build**: Copies a shareable URL to your clipboard
- **New Build**: Starts a fresh build (prompts to confirm)
- **Reset Build**: Clears all skills and gear (prompts to confirm)

#### Sharing Builds

Click the "Share" button to generate a URL containing your build data. Anyone with this URL can load your build directly in their browser.

## Technical Details

### Architecture

- **Pure HTML/CSS/JavaScript**: No frameworks or build tools required
- **Local Storage**: Builds are persisted in the browser
- **URL Encoding**: Builds can be shared via URL parameters
- **Modular Design**: Separated concerns (data, storage, app logic, presentation)

### File Structure

```
/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles and responsive design
├── js/
│   ├── data.js         # Game data (classes, skills, gear)
│   ├── storage.js      # Local storage management
│   └── app.js          # Main application logic
└── assets/
    └── images/         # Future asset directory
```

### Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Any modern browser with ES6 support

### Data Storage

All builds are stored in browser `localStorage` under the key `d4_builds`. Data persists across browser sessions but is limited to the specific browser and device.

## Customization

### Adding More Skills

Edit `js/data.js` and add skills to the `SKILLS` object for each class:

```javascript
SKILLS.barbarian.basic.push({
  id: 'new_skill',
  name: 'New Skill',
  description: 'Skill description',
  maxRank: 5
});
```

### Modifying Stats

Update the `STATS` array in `js/data.js`:

```javascript
STATS.push({
  id: 'new_stat',
  name: 'New Stat',
  icon: '⚡'
});
```

### Styling

All styles are contained in `css/styles.css`. The color scheme uses CSS variables defined in the `:root` selector for easy customization:

```css
:root {
  --bg-primary: #1a1a1a;
  --accent-gold: #fbbf24;
  /* ... */
}
```

## Roadmap

Potential future enhancements:
- Paragon board visualization and planning
- Legendary aspect database
- Unique item database
- Build comparison tool
- Community build sharing platform
- Mobile app version
- Skill damage calculations

## Contributing

Feel free to fork this project and submit pull requests for new features or improvements.

## License

This project is open source and available for personal and educational use.

## Disclaimer

This is a fan-made tool and is not officially affiliated with Blizzard Entertainment or Diablo 4. All game content and trademarks belong to their respective owners.

## Credits

- Built with inspiration from d4builds.gg and other community build planners
- Skill data based on Diablo 4 Season 11 (2026)

## Support

For issues or feature requests, please open an issue on the repository.

---

**Enjoy planning your builds and may you find great loot in Sanctuary!** ⚔️
