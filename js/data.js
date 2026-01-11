// Diablo 4 Build Planner - Game Data

const CLASSES = {
  barbarian: {
    id: 'barbarian',
    name: 'Barbarian',
    color: '#dc2626',
    description: 'Master of melee combat and raw strength',
    primaryStat: 'Strength'
  },
  druid: {
    id: 'druid',
    name: 'Druid',
    color: '#65a30d',
    description: 'Shape-shifter wielding nature\'s fury',
    primaryStat: 'Willpower'
  },
  necromancer: {
    id: 'necromancer',
    name: 'Necromancer',
    color: '#16a34a',
    description: 'Commander of the undead and master of blood magic',
    primaryStat: 'Intelligence'
  },
  rogue: {
    id: 'rogue',
    name: 'Rogue',
    color: '#9333ea',
    description: 'Agile assassin with deadly precision',
    primaryStat: 'Dexterity'
  },
  sorcerer: {
    id: 'sorcerer',
    name: 'Sorcerer',
    color: '#3b82f6',
    description: 'Master of elemental magic',
    primaryStat: 'Intelligence'
  }
};

const SKILL_CATEGORIES = {
  basic: { name: 'Basic', maxPoints: 1, tier: 1 },
  core: { name: 'Core', maxPoints: 5, tier: 2 },
  defensive: { name: 'Defensive', maxPoints: 5, tier: 3 },
  brawling: { name: 'Brawling', maxPoints: 5, tier: 4 },
  weapon: { name: 'Weapon Mastery', maxPoints: 5, tier: 5 },
  ultimate: { name: 'Ultimate', maxPoints: 1, tier: 6 },
  keyPassive: { name: 'Key Passive', maxPoints: 1, tier: 7 }
};

const SKILLS = {
  barbarian: {
    basic: [
      { id: 'bash', name: 'Bash', description: 'Bash the enemy with your weapon, dealing damage.', maxRank: 5 },
      { id: 'flay', name: 'Flay', description: 'Flay the enemy, dealing damage and applying Bleed.', maxRank: 5 },
      { id: 'lunging_strike', name: 'Lunging Strike', description: 'Lunge forward and strike an enemy.', maxRank: 5 },
      { id: 'frenzy', name: 'Frenzy', description: 'Unleash a rapid flurry of blows.', maxRank: 5 }
    ],
    core: [
      { id: 'rend', name: 'Rend', description: 'Cleave enemies in front of you, dealing damage.', maxRank: 5 },
      { id: 'hammer_ancients', name: 'Hammer of the Ancients', description: 'Slam your hammer down, dealing damage.', maxRank: 5 },
      { id: 'upheaval', name: 'Upheaval', description: 'Tear into the ground and fling debris.', maxRank: 5 },
      { id: 'double_swing', name: 'Double Swing', description: 'Sweep your weapons from opposite directions.', maxRank: 5 },
      { id: 'whirlwind', name: 'Whirlwind', description: 'Rapidly attack surrounding enemies.', maxRank: 5 }
    ],
    defensive: [
      { id: 'rallying_cry', name: 'Rallying Cry', description: 'Bellow a rallying cry, increasing movement speed.', maxRank: 5 },
      { id: 'iron_skin', name: 'Iron Skin', description: 'Steel yourself, gaining a barrier.', maxRank: 5 },
      { id: 'challenging_shout', name: 'Challenging Shout', description: 'Taunt enemies and gain damage reduction.', maxRank: 5 },
      { id: 'ground_stomp', name: 'Ground Stomp', description: 'Smash the ground, stunning nearby enemies.', maxRank: 5 }
    ],
    brawling: [
      { id: 'kick', name: 'Kick', description: 'Kick an enemy, dealing damage and knocking them back.', maxRank: 5 },
      { id: 'charge', name: 'Charge', description: 'Charge forward, pushing enemies and dealing damage.', maxRank: 5 },
      { id: 'leap', name: 'Leap', description: 'Leap forward and slam down, dealing damage.', maxRank: 5 },
      { id: 'war_cry', name: 'War Cry', description: 'Bellow a war cry, increasing damage dealt.', maxRank: 5 }
    ],
    weapon: [
      { id: 'rupture', name: 'Rupture', description: 'Skewer enemies, dealing Bleeding damage.', maxRank: 5 },
      { id: 'steel_grasp', name: 'Steel Grasp', description: 'Throw chains that pull enemies to you.', maxRank: 5 },
      { id: 'death_blow', name: 'Death Blow', description: 'Attempt a killing strike with increased damage.', maxRank: 5 }
    ],
    ultimate: [
      { id: 'iron_maelstrom', name: 'Iron Maelstrom', description: 'Activate all four Ancients, dealing massive damage.', maxRank: 1 },
      { id: 'call_ancients', name: 'Call of the Ancients', description: 'Summon 3 Ancients to fight for you.', maxRank: 1 },
      { id: 'wrath_berserker', name: 'Wrath of the Berserker', description: 'Go berserk, gaining increased damage and movement speed.', maxRank: 1 }
    ],
    keyPassive: [
      { id: 'unconstrained', name: 'Unconstrained', description: 'Increase Berserk damage bonus.', maxRank: 1 },
      { id: 'walking_arsenal', name: 'Walking Arsenal', description: 'Dealing damage grants benefits based on weapon type.', maxRank: 1 },
      { id: 'grim_harvest', name: 'Grim Harvest', description: 'Bleed damage has a chance to summon a Blood Orb.', maxRank: 1 }
    ]
  },
  rogue: {
    basic: [
      { id: 'blade_shift', name: 'Blade Shift', description: 'Strike enemies with your blades.', maxRank: 5 },
      { id: 'invigorating_strike', name: 'Invigorating Strike', description: 'Strike an enemy, restoring energy.', maxRank: 5 },
      { id: 'puncture', name: 'Puncture', description: 'Throw blades at enemies in front of you.', maxRank: 5 },
      { id: 'heartseeker', name: 'Heartseeker', description: 'Fire an arrow that seeks enemies.', maxRank: 5 }
    ],
    core: [
      { id: 'penetrating_shot', name: 'Penetrating Shot', description: 'Fire an arrow that pierces through enemies.', maxRank: 5 },
      { id: 'rapid_fire', name: 'Rapid Fire', description: 'Rapidly fire arrows at an enemy.', maxRank: 5 },
      { id: 'barrage', name: 'Barrage', description: 'Fire arrows that ricochet off walls.', maxRank: 5 },
      { id: 'flurry', name: 'Flurry', description: 'Unleash a flurry of stabs.', maxRank: 5 },
      { id: 'twisting_blades', name: 'Twisting Blades', description: 'Impale enemies with returning blades.', maxRank: 5 }
    ],
    defensive: [
      { id: 'caltrops', name: 'Caltrops', description: 'Drop caltrops that slow and damage enemies.', maxRank: 5 },
      { id: 'dash', name: 'Dash', description: 'Dash forward, becoming unstoppable.', maxRank: 5 },
      { id: 'shadow_step', name: 'Shadow Step', description: 'Shadow step behind an enemy.', maxRank: 5 },
      { id: 'concealment', name: 'Concealment', description: 'Vanish from sight and gain stealth.', maxRank: 5 }
    ],
    brawling: [
      { id: 'poison_trap', name: 'Poison Trap', description: 'Place a trap that poisons enemies.', maxRank: 5 },
      { id: 'smoke_grenade', name: 'Smoke Grenade', description: 'Throw a grenade that stuns enemies.', maxRank: 5 },
      { id: 'dark_shroud', name: 'Dark Shroud', description: 'Surround yourself with protective shadows.', maxRank: 5 }
    ],
    weapon: [
      { id: 'rain_of_arrows', name: 'Rain of Arrows', description: 'Unleash a barrage of arrows.', maxRank: 5 },
      { id: 'shadow_clone', name: 'Shadow Clone', description: 'Create a shadow that mimics your attacks.', maxRank: 5 },
      { id: 'shadow_imbuement', name: 'Shadow Imbuement', description: 'Imbue weapons with shadow damage.', maxRank: 5 }
    ],
    ultimate: [
      { id: 'death_trap', name: 'Death Trap', description: 'Place a trap that arms and explodes.', maxRank: 1 },
      { id: 'shadow_dance', name: 'Shadow Dance', description: 'Become a shadow and strike rapidly.', maxRank: 1 },
      { id: 'inner_sight', name: 'Inner Sight', description: 'Mark enemies to restore resources.', maxRank: 1 }
    ],
    keyPassive: [
      { id: 'momentum', name: 'Momentum', description: 'Critical strikes grant increased damage.', maxRank: 1 },
      { id: 'close_quarters', name: 'Close Quarters Combat', description: 'Damaging nearby enemies grants bonuses.', maxRank: 1 },
      { id: 'precision', name: 'Precision', description: 'Critical strikes grant increased crit chance.', maxRank: 1 }
    ]
  },
  sorcerer: {
    basic: [
      { id: 'spark', name: 'Spark', description: 'Hurl a bolt of lightning.', maxRank: 5 },
      { id: 'fire_bolt', name: 'Fire Bolt', description: 'Hurl a flaming bolt.', maxRank: 5 },
      { id: 'frost_bolt', name: 'Frost Bolt', description: 'Throw a bolt of frost.', maxRank: 5 },
      { id: 'arc_lash', name: 'Arc Lash', description: 'Lash out with lightning.', maxRank: 5 }
    ],
    core: [
      { id: 'chain_lightning', name: 'Chain Lightning', description: 'Unleash lightning that chains.', maxRank: 5 },
      { id: 'charged_bolts', name: 'Charged Bolts', description: 'Release piercing bolts.', maxRank: 5 },
      { id: 'fireball', name: 'Fireball', description: 'Hurl an exploding fireball.', maxRank: 5 },
      { id: 'ice_shards', name: 'Ice Shards', description: 'Launch shards of ice.', maxRank: 5 },
      { id: 'frozen_orb', name: 'Frozen Orb', description: 'Unleash an orb of freezing cold.', maxRank: 5 }
    ],
    defensive: [
      { id: 'flame_shield', name: 'Flame Shield', description: 'Surround yourself with flames.', maxRank: 5 },
      { id: 'frost_nova', name: 'Frost Nova', description: 'Unleash a freezing blast.', maxRank: 5 },
      { id: 'ice_armor', name: 'Ice Armor', description: 'Shield yourself with ice.', maxRank: 5 },
      { id: 'teleport', name: 'Teleport', description: 'Transform into lightning.', maxRank: 5 }
    ],
    brawling: [
      { id: 'hydra', name: 'Hydra', description: 'Summon a hydra that breathes fire.', maxRank: 5 },
      { id: 'ice_blades', name: 'Ice Blades', description: 'Summon blades of ice.', maxRank: 5 },
      { id: 'lightning_spear', name: 'Lightning Spear', description: 'Summon a spear that strikes.', maxRank: 5 }
    ],
    weapon: [
      { id: 'blizzard', name: 'Blizzard', description: 'Summon a freezing blizzard.', maxRank: 5 },
      { id: 'meteor', name: 'Meteor', description: 'Call down meteors.', maxRank: 5 },
      { id: 'ball_lightning', name: 'Ball Lightning', description: 'Conjure crackling spheres.', maxRank: 5 }
    ],
    ultimate: [
      { id: 'inferno', name: 'Inferno', description: 'Summon a raging inferno.', maxRank: 1 },
      { id: 'deep_freeze', name: 'Deep Freeze', description: 'Encase yourself in ice.', maxRank: 1 },
      { id: 'unstable_currents', name: 'Unstable Currents', description: 'Summon lightning automatically.', maxRank: 1 }
    ],
    keyPassive: [
      { id: 'avalanche', name: 'Avalanche', description: 'Ice skills deal bonus damage.', maxRank: 1 },
      { id: 'overflowing', name: 'Overflowing Energy', description: 'Crackling Energy grants mana.', maxRank: 1 },
      { id: 'combustion', name: 'Combustion', description: 'Burning effects deal bonus damage.', maxRank: 1 }
    ]
  },
  necromancer: {
    basic: [
      { id: 'decompose', name: 'Decompose', description: 'Tear at enemies, dealing damage.', maxRank: 5 },
      { id: 'hemorrhage', name: 'Hemorrhage', description: 'Draw blood from enemies.', maxRank: 5 },
      { id: 'reap', name: 'Reap', description: 'Sweep an ethereal scythe.', maxRank: 5 },
      { id: 'bone_splinters', name: 'Bone Splinters', description: 'Fire bone splinters.', maxRank: 5 }
    ],
    core: [
      { id: 'blight', name: 'Blight', description: 'Unleash concentrated blight.', maxRank: 5 },
      { id: 'sever', name: 'Sever', description: 'Separate spirit from flesh.', maxRank: 5 },
      { id: 'blood_lance', name: 'Blood Lance', description: 'Throw a blood lance.', maxRank: 5 },
      { id: 'blood_surge', name: 'Blood Surge', description: 'Draw blood and expel it.', maxRank: 5 },
      { id: 'bone_spear', name: 'Bone Spear', description: 'Conjure a bone spear.', maxRank: 5 }
    ],
    defensive: [
      { id: 'blood_mist', name: 'Blood Mist', description: 'Disperse into mist.', maxRank: 5 },
      { id: 'bone_prison', name: 'Bone Prison', description: 'Trap enemies in bone.', maxRank: 5 },
      { id: 'corpse_tendrils', name: 'Corpse Tendrils', description: 'Pull enemies with tendrils.', maxRank: 5 }
    ],
    brawling: [
      { id: 'skeletal_mage', name: 'Skeletal Mage', description: 'Summon a skeletal mage.', maxRank: 5 },
      { id: 'bone_spirit', name: 'Bone Spirit', description: 'Summon a spirit that seeks enemies.', maxRank: 5 },
      { id: 'corpse_explosion', name: 'Corpse Explosion', description: 'Detonate corpses.', maxRank: 5 }
    ],
    weapon: [
      { id: 'decrepify', name: 'Decrepify', description: 'Curse enemies with weakness.', maxRank: 5 },
      { id: 'iron_maiden', name: 'Iron Maiden', description: 'Curse enemies to reflect damage.', maxRank: 5 },
      { id: 'bone_storm', name: 'Bone Storm', description: 'Summon a storm of bones.', maxRank: 5 }
    ],
    ultimate: [
      { id: 'army_dead', name: 'Army of the Dead', description: 'Summon an army of undead.', maxRank: 1 },
      { id: 'blood_wave', name: 'Blood Wave', description: 'Unleash a wave of blood.', maxRank: 1 },
      { id: 'bone_prison_ult', name: 'Bone Prison Ultimate', description: 'Trap all enemies in bone.', maxRank: 1 }
    ],
    keyPassive: [
      { id: 'ossified_essence', name: 'Ossified Essence', description: 'Bone skills deal bonus damage.', maxRank: 1 },
      { id: 'rathma', name: 'Rathma\'s Vigor', description: 'Blood skills heal you.', maxRank: 1 },
      { id: 'kalan', name: 'Kalan\'s Edict', description: 'Minions deal bonus damage.', maxRank: 1 }
    ]
  },
  druid: {
    basic: [
      { id: 'maul', name: 'Maul', description: 'Maul enemies in werebear form.', maxRank: 5 },
      { id: 'earth_spike', name: 'Earth Spike', description: 'Impale enemies with earth spikes.', maxRank: 5 },
      { id: 'wind_shear', name: 'Wind Shear', description: 'Conjure piercing wind blades.', maxRank: 5 },
      { id: 'claw', name: 'Claw', description: 'Claw enemies in werewolf form.', maxRank: 5 }
    ],
    core: [
      { id: 'landslide', name: 'Landslide', description: 'Crush enemies with earth.', maxRank: 5 },
      { id: 'pulverize', name: 'Pulverize', description: 'Slam the ground in werebear form.', maxRank: 5 },
      { id: 'tornado', name: 'Tornado', description: 'Summon a tornado.', maxRank: 5 },
      { id: 'shred', name: 'Shred', description: 'Shred enemies rapidly.', maxRank: 5 },
      { id: 'lightning_storm', name: 'Lightning Storm', description: 'Summon bolts of lightning.', maxRank: 5 }
    ],
    defensive: [
      { id: 'earthen_bulwark', name: 'Earthen Bulwark', description: 'Rocks surround you.', maxRank: 5 },
      { id: 'cyclone_armor', name: 'Cyclone Armor', description: 'Winds protect you.', maxRank: 5 },
      { id: 'debilitating_roar', name: 'Debilitating Roar', description: 'Roar to reduce enemy damage.', maxRank: 5 }
    ],
    brawling: [
      { id: 'ravens', name: 'Ravens', description: 'Summon ravens to attack.', maxRank: 5 },
      { id: 'poison_creeper', name: 'Poison Creeper', description: 'Summon a poisonous vine.', maxRank: 5 },
      { id: 'wolves', name: 'Wolves', description: 'Summon wolves to fight.', maxRank: 5 }
    ],
    weapon: [
      { id: 'trample', name: 'Trample', description: 'Charge and knock enemies down.', maxRank: 5 },
      { id: 'hurricane', name: 'Hurricane', description: 'Form a hurricane around you.', maxRank: 5 },
      { id: 'boulder', name: 'Boulder', description: 'Summon a rolling boulder.', maxRank: 5 }
    ],
    ultimate: [
      { id: 'grizzly_rage', name: 'Grizzly Rage', description: 'Transform into a dire werebear.', maxRank: 1 },
      { id: 'petrify', name: 'Petrify', description: 'Turn enemies to stone.', maxRank: 1 },
      { id: 'lacerate', name: 'Lacerate', description: 'Shapeshift and slash.', maxRank: 1 }
    ],
    keyPassive: [
      { id: 'bestial_rampage', name: 'Bestial Rampage', description: 'Shapeshifting grants bonuses.', maxRank: 1 },
      { id: 'earthen_might', name: 'Earthen Might', description: 'Earth skills grant bonuses.', maxRank: 1 },
      { id: 'ursine_strength', name: 'Ursine Strength', description: 'Werebear form grants damage.', maxRank: 1 }
    ]
  }
};

const GEAR_SLOTS = [
  { id: 'helm', name: 'Helm', icon: '🪖' },
  { id: 'chest', name: 'Chest Armor', icon: '🛡️' },
  { id: 'gloves', name: 'Gloves', icon: '🧤' },
  { id: 'pants', name: 'Pants', icon: '👖' },
  { id: 'boots', name: 'Boots', icon: '👢' },
  { id: 'amulet', name: 'Amulet', icon: '📿' },
  { id: 'ring1', name: 'Ring', icon: '💍' },
  { id: 'ring2', name: 'Ring', icon: '💍' },
  { id: 'weapon', name: 'Weapon', icon: '⚔️' },
  { id: 'offhand', name: 'Off-hand', icon: '🛡️' }
];

const STATS = [
  { id: 'strength', name: 'Strength', icon: '💪' },
  { id: 'dexterity', name: 'Dexterity', icon: '🎯' },
  { id: 'intelligence', name: 'Intelligence', icon: '🧠' },
  { id: 'willpower', name: 'Willpower', icon: '🔮' },
  { id: 'life', name: 'Life', icon: '❤️' },
  { id: 'armor', name: 'Armor', icon: '🛡️' },
  { id: 'damage', name: 'Damage', icon: '⚔️' }
];

const MAX_SKILL_POINTS = 58;
