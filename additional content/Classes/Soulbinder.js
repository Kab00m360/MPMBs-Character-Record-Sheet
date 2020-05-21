/*	-WHAT IS THIS?-
	The script featured here is an explanation of how to make your own custom addition to MPMB's D&D 5e Character Tools.
	To add your own content to the Character Sheet, use the syntax below and save it in a file. You can then import this file directly to the sheet using the "Import" button and "Import/Export" bookmark.
	There you can either import the file as a whole or just copy the text into a dialogue.
	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialogue.
	It is recommended to enter the code in a freshly downloaded or reset sheet before adding any other information so that there won't be any conflicts.
*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This is the syntax for adding a new class to the sheet
				Note that you will need the syntax for adding a subclass as well if you want the class to have any choices for subclasses
	Sheet:		v13.00.00 (2018-??-??) [identical to v12.999 syntax, except v12.999 uses 'borrow' for the burrow speed]
*/

var iFileName = "Homebrew Class - Soulbinder.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

ClassList["soulbinder"] = { //Object name; Note the use of only lower case! Also note the absence of the word "var" and the use of brackets []

	regExpSearch : /^(?=.*my)(?=.*class).*$/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "my" and "class" in it, disregarding capitalization). If this looks too complicated, just write: /myclass/i

	name : "Soulbinder", //required; the name to use for the class

	source : ["HB", 0], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

	primaryAbility : "\n \u2022 Soulbinder: Charisma;", //required; the text to display when citing the primary ability of the class

	prereqs : "\n \u2022 Soulbinder: Charisma 13;", //required; the text to display when citing the prerequisite for the class when multiclassing

	die : 6, //required; the type of hit die the class has (i.e. 10 means d10)

	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 7], //required; the amount of ability score improvements (or feats) at each level. Note that there are 20 entries, one for each level. This example uses the Fighter's progression

	saves : ["Con", "Cha"], //required; the two save proficiencies.

	skills : ["\n\n" + toUni("Soulbinder") + ": Choose two from Animal Handling, Arcana, History, Nature, Insight, Intimidation, and Persuasion."], //required; the text to display for skill proficiencies. Note the \n\n at the start, they are important! The first entry is for when the class is the primary class, the second entry is for when the class is taken later as part of a multiclass

/* SYNTAX CHANGE v12.998 >> old syntax for 'tools' and 'languages' are no longer supported!! */
	toolProfs : [ // optional; this is an object with arrays with the tool proficiencies gained. Each entry in an array can be its own array of 2 entries. The first entry is the name of the tool and the second entry is either 1) a number if the tool is yet to be chosen, or 2) the 3-letter ability score abbreviation if the tool is to be listed in the skill section and have a bonus calculated
		// FIXME: check colon - syntax error
		// primary : [["Artisan's tools", 1], or ["Musical instrument", 1]] // optional; the tool proficiencies gained if the class is the primary class (i.e. taken at 1st level)
	],

	armor : [ //required; the 4 entries are for: ["light", "medium", "heavy", "shields"]
		[true, false, false, false], //required; the armor proficiencies if this is the first or only class
		[true, false, false, false] //required; the armor proficiencies if this class is multiclassed with (so not taken at level 1, but later)
	],

	weapons : [ //required; the 3 entries are for: ["simple", "martial", "other"]
		[true, false, false], //required; the weapon proficiencies if this is the first or only class
		[true, false, false] //required; the weapon proficiencies if this class is multiclassed with (so not taken at level 1, but later)
	],

	equipment : "Soulbinder starting equipment:\n \u2022 2 daggers -or- any simple weapon -or- any martial weapon;\n \u2022 A priest's pack -or- a scholar's pack;\n \u2022 a set of leather armor -or- a set of scale mail;\n \u2022 A set of artisan's tools -or- an instrument.\n\n Alternatively, choose 4d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.", //required; the text to display when citing the starting equipment

	subclasses : ["Soul Bond", ["Bond of the Wild", "Bond of the Abberation", "Bond of the Drargonkin", "Bond of the Elements", "Bond of the Dirge", "Bond of the Divine", "Bond of the Playful Fey", "Bond of the Demonic Pain", "Bond of the Stitcher", "Bond of the Ooze", "Bond of the Verdant"]], //required; the names of the subclasses. The first entry is the overall name that is given to the subclasses, the second entry is a list of the subclass, using the exact names of the entry of the subclasses in the ClassSubList. //Note that if one of the entries in the array of subclasses doesn't exist in the ClassSubList, the sheet will throw an error as soon as you make a character with levels in this class
	//IMPORTANT: for any subclass you add using the AddSubClass() function, don't list them here! The AddSubClass() function makes its own entry in this array! If you have entries here that don't exist (because you didn't add any ClassSubList entry, or added it using the AddSubClass() function, then the sheet will throw strange errors)!

	attacks : [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,], //required; the amount of attacks at each level. Note that there are 20 entries, one for each level.

	abilitySave : 6, //optional, but required for a spellcaster; the ability score to use for the Ability Saving Throws. Remove this line if your class has no Ability that requires Saving Throws. (Str=1, Dex=2, Con=3, Int=4, Wis=5, Cha=6)

	spellcastingFactor : 2, //required for a spellcaster; the speed with which spell progression works type 1 for full spellcasting (Cleric), 2 for half spellcasting (Paladin), and 3 for one-third spellcasting (Arcane Trickster). This can be any positive number other than 0. Remove this line if your class has no spellcasting. If your character uses the Warlock way of spellcasting, write "warlock1" here. The 1 indicates the spell progression factor. You can change it to a 2 or 3 to have half or one-third spell progression (or to any other factor you like).
		// You can also have this refer to a Spell Slot progression you define yourself, as a separate variable (see "Homebrew Syntax - SpellTable.js"). In order to do this the name of that variable and the spellcastingFactor must match. Using the name "purplemancer" for example would mean that here you put [spellcastingFactor : "purplemancer1"] (the 1 is the factor, this can be any positive number other than 0) while for the variable containing the table you use "purplemancerSpellTable". Note that the name is all lower case!

	spellcastingTable : [ //optional, only if you want to use a non-standard table for spell slot progression and just for this one (sub)class. You can either use the spellcastingTable attribute, or define a new SpellTable in a separate variable (see "Homebrew Syntax - SpellTable.js"). If you are adding multiple classes that use the same table, please add it as a separate variable, for otherwise the spell slots will be added up per individual class level instead of adding the class levels together to find the total amount of spell slots
	// if you add this variable, the number in the spellcastingFactor will be only be used when multiclassing. Note that you still need to enter something in the spellcastingFactor to tell the sheet that its dealing with a spellcaster.
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 0
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 1
		[2, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 2
		[2, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 3
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 4
		[3, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 5
		[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 6
		[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl 7
		[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl 8
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl 9
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl10
		[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl11
		[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl12
		[4, 3, 3, 1, 0, 0, 0, 0, 0], //lvl13
		[4, 3, 3, 1, 0, 0, 0, 0, 0], //lvl14
		[4, 3, 3, 2, 0, 0, 0, 0, 0], //lvl15
		[4, 3, 3, 2, 0, 0, 0, 0, 0], //lvl16
		[4, 3, 3, 3, 1, 0, 0, 0, 0], //lvl17
		[4, 3, 3, 3, 1, 0, 0, 0, 0], //lvl18
		[4, 3, 3, 3, 2, 0, 0, 0, 0], //lvl19
		[4, 3, 3, 3, 2, 0, 0, 0, 0] //lvl20
	],

	spellcastingKnown : { //Optional; Denotes the amount and type of spells the class has access to

		cantrips : [0, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], //Optional; This can either be one number, an array of 20 numbers, or be omitted for a class that doesn't have access to cantrips. The numbers reflect the amount of cantrips known

		spells : ['list'],//Optional; This can either be one number, an array of 20 numbers, or be omitted for a class that doesn't have access to spells. The numbers reflect the amount of spells known. For a class that doesn't know spells, but prepares them from a list, you should put "list" here. For a class that uses a spellbook, you should put "book" here.

		prepared : true, //Optional; This indicates that the class has to prepare spells like a cleric/druid/paladin/wizard

	},

	spellcastingList : { //Optional; Only needed if the class doesn't have its own spell list. This object denotes what spells the class has access to. All things in this object constrain the selection of spells that will be available. The contstraints are cumulative.

		class : "wizard", //Required; The name of the class from whose spell list the spells come from. This can be "any" if the spells are not limited by a spell list of just one class. The entry has to match the name of the class in the SpellsList

		school : ["Evoc", "Abjur"], //Optional; An array of abbreviations of spell school names (see SpellsList). These have to be in an array, even if it is just one value. Each entry has to match the name of the spell school in the SpellsList

		level : [0, 5], //Optional; The lower and upper limit of spell levels that the class has access to.

		ritual : false, //Optional; Denotes if only ritual (true) or only non-ritual (false) spells should be included in the list

		spells : ["light", "mending"], //Optional; If a "spells" array is present, all other objects will be ignored and only this list of spells will populate the list of available spells. each entry has to match the name of the spell in the SpellsList

		notspells : ["antipathy/sympathy", "tsunami"], //Optional; Any spells listed in this array will be excluded from the list
	},

	spellcastingExtra : ["detect magic", "magic missile", "magic weapon", "nystul's magic aura", "dispel magic", "magic circle", "arcane eye", "leomund's secret chest", "planar binding", "teleportation circle"], //Optional; An array of spells that are added to the spell list from which the class can choose. If the class prepares spells, than this list of spells are always considered prepared. Each entry has to match the name of the entry of the spell in the SpellsList exactly
	//You can also have the list be added to the known spells of a class by making the 101th entry in the array read "AddToKnown" (i.e. spellcastingExtra[100] = "AddToKnown");

	features : { //required;  the class features. Each works the same way, so only a couple of example are given. You can add as many as you want

		
				
				calcChanges : { //optional; adds stuff to the calculation of attacks and/or HP

					hp : "if (classes.known.sorcerer) {extrahp += classes.known.sorcerer.level; extrastring += \"\\n + \" + classes.known.sorcerer.level + \" from Draconic Resilience (Sorcerer)\";};", //optional; string to be run using eval() when calculating the number of HP in the HP tooltip and automation

					atkCalc : ["if (isOffHand) {output.modToDmg = true; }; ", "When engaging in two-weapon fighting, I can add my ability modifier to the damage of my off-hand attacks."], //optional; ["eval string", "explanation string"]; change something in the calculation of the Damage and To Hit of attacks; The first value in the array is stringified code that is run using eval(), the second entry is an explanation of what is being altered so that it can be displayed in a dialogue. This second entry can be left empty, as ""

					atkAdd : ["if (WeaponName.match(/unarmed strike/i)) {fields.Description += 'Counts as magical';}; ", "My unarmed strikes count as magical for overcoming resistances and immunities."], //optional;  ["eval string", "explanation string"]; works just like atkDmg, but affects the weapon attributes when they are applied to the sheet. With this you can change the weapon's description, range, damage die, attribute, etc. etc. However, this will only be applied to recognized weapons

						// Note that you need to use two back slashes for things in the eval code here, because it is first added to a string, and then run as code. See the hp for an example, with the \\n

						// For the eval strings for the attack calculations ('atkCalc' or 'atkAdd') there are some variables that you can use to test against:

							// The variable WeaponName contains the recognized weapon object name as it is used in the WeaponsList object (or "" in atkCalc if the weapon is not a recognized weapon);

							// The object "theWea" is the WeaponsList[WeaponName] object for the recognized weapon (or 'undefined' in atkCalc if the weapon is not a recognized weapon);

							// You can use the booleans 'isOffHand', 'isMeleeWeapon', 'isRangedWeapon', 'isSpell' (also true for cantrips), 'isDC'

							// If the attack is a spell that is found on the SpellList, the variable thisWeapon[3] contains the name of the entry in the SpellList

							// The object "fields" has all the values of the different fields of the attack (fields.Proficiency, fields.Mod, fields.Range, fields.Damage_Type, fields.Description, fields.To_Hit_Bonus, fields.Damage_Bonus, fields.Damage_Die, fields.Weight);

							// You can change the attributes of the "fields" object with the eval-string of atkAdd to affect what is put into the fields.

							// You can use the attributes of the "fields" object with the eval-string of atkCalc to check for things, but changing them will have no effect on the sheet.

							// With the atkCalc you have to change the "output" object in order to affect the outcome of the calculations. This object has the following attributes: output.prof (wether or not to add the proficiency bonus to the To Hit), output.die (Damage Die to use), output.mod (ability modifier), output.modToDmg (whether or not to add the ability modifier to Damage), output.magic (any magic bonus that's to be added to both To Hit and Damage), output.bHit (the To Hit bonus from the Blue Text/Modifier field), output.bDmg (the Damage bonus from the Blue Text/Modifier field), output.extraHit (a number added to the To Hit that is reserved for this eval), output.extraDmg (a number added to the damage that is reserved for this eval)
			
					},
			
		

		"arcane initiate" : {
			name : "Arcane Initiate",
			source : ["S", 125],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with Arcana and two wizard cantrips that count as cleric cantrips",

			skills : ["Arcana"], //optional; an array of skills with which proficiency is gained

			skillstxt : "\n\n" + toUni("Arcane Domain") + ": Arcana.", //optional; the text that has to be added to the skill tooltips

			spellcastingBonus : { //optional; an object that adds something to the "Bonus Spells" section of the spell selection dialog //this object can have all the same attributes as the "spellcastingList" object, but must also have a "name" defined" //the other things that can be defined in this that are not in the "spellcastingList" object, are the "selection", "times" and "prepared" values

				name : "Arcane Initiate", //required; this is used to identify the object, so must be an unique name

				class : "wizard", //optional but required if not including the "spells" entry; see "spellcastingList" object

				level : [0, 0], //optional; see "spellcastingList" object

				school : ["Necro"], //optional; see "spellcastingList" object

				spells : ["light"], //optional, but required if not including the "class" entry; see "spellcastingList" object

				notspells : ["mending"], //optional; see "spellcastingList" object

				selection : ["light"], //optional if "spells" is defined; this is the default selection for the array specified in "spells"

				times : 2, //optional; this is the number of times the bonus spells should be added. //This can also be an array of 20 values. That way the number of times are level-dependent

				prepared : true, //optional; if set to 'true', this makes the spell selected for this/these bonus spells to automatically get a checked off checkbox in the first column, similar to domain spells for a cleric

				atwill : true, //optional; if set to 'true', this makes the spell selected for this/these bonus spells to get "At Will" in the first column

				oncesr : true, //optional; if set to 'true', this makes the spell selected for this/these bonus spells to get "1×SR" in the first column

				oncelr : true, //optional; if set to 'true', this makes the spell selected for this/these bonus spells to get "1×LR" in the first column

				firstCol : "8", //optional; if set to any value, this makes the spell selected for this/these bonus spells to get the first two letters/numbers of that value in the first column
			},

			spellFirstColTitle : "Ki", //optional, only works if spellcastingBonus exists; if set to any value, this makes the first column of the captions on the spell sheet be set to the first two letters/numbers of that value

			vision : [["Darkvision", 60], ["Sunlight Sensitivity", 0]], //optional; An array of arrays that each have a length of 2; This adds the first value of each array to the Senses field. The second value is the range in feet. If no range is needed, put a 0 there. You can also add a modifier like "+30" or "*2" to have the appropriate calculation done with the range of sense
		},

		"subclassfeature1" : {
			name: "Soul Bond",
			source : ["HB:SB", 3],
			minlevel:1,
			description: "Choose a Soul Bond and put it in the \"Class\" field" + "\n   " + "Choose either Bond of the Demonic Pain, Bond of the Dirge, Bond of the Divine, Bond of the Dragonkin, Bond of the Elemental, Bond of the Ooze, Bond of the Playful Fey, Bond of the Puppet, Bond of the Split Soul, Bond of the Stitched, Bond of the Unknown, Bond of the Verdant, or Bond of the Wild",
		},
		"bondedcompanion" : {
			name :  "Bonded Companion",
			source : ["HB:SB", 3],
			minlevel : 1,
			description : "\n   " + "I can issue commands to mycompanion verbally(no action required) as long as I am not incapacitated" + "\n   " + "My companion and I cannot both attack and/or cast a spell on the same turn",
		},
		"magicitemabsorption" : {
			name :  "Magic Item Absorption",
			source : ["HB:SB", 3],
			minlevel : 1,
			description : "\n   " + "I can let my companion absorb magic items during a Short Rest" + "\n   " + "My companion can access the abilities of absorbed items and gain any relevant weapon and armor bonuses" + "\n   " + "absorbed items always cost attunements slots",
		},
	
		"spellcasting" : {
			name : "Spellcasting",
			source : ["HB:SB", 3],
			minlevel : 2,
			description : "\n   " + "I can cast prepared soulbonder cantrips/spells, using Charisma as my spellcasting ability" + "\n   " + "I can use an arcane focus as a spellcasting focus",
			additional : ["0 cantrips known", "2 cantrips known", "2 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known"], //optional; text to display in the header of the feature. This can be one value, but can also be an array of 20 values, one for each level.
		}, 
		"edict" : {
			name : "Edict",
			source : ["HB:SB", 4],
			minlevel : 2,
			description : "\n   " + "As a bonus action, I issue a command to my companion either Strike, Toughen Up, Block, or Move" + "\n   " + "I can do this a number of times equal to my Charisma modifier per long rest",
			usage : 'Cha per',
			recovery : "long rest",
			action : ["bonus action", ""]
		},
		"hiddenform" : { //note the use of lower case characters
			name : "Hidden Form", //required; the name of the class feature
			source : ["HB:SB", 4], //required; the source of the class feature
			minlevel : 3, //required; the level at which the feature is gained
			description : "\n   " + "Choose a hidden form using the \"Choose Feature\" button above", //required; the text to put in the "Class Features" field
			choices : ["shrink", "stow", "mask"], //optional; choices the feature offers, if any.
			choicesNotInMenu : false, //optional: this tells the sheet not to put the choices into the "Choose Options" menu on the second page. Use this is you want to have the choices selected through another class feature. See for an example of this the "Draconic Bloodline" sorcerer archetype. // Note that you always want to have the choices listed in the choices attribute, because otherwise they won't be updated if they have level-dependent features
			"shrink" : { //required if "choices" is defined; has to be exactly the same as how it is written in the "choices" entry. Note the use of lower case!
				name : "Shrunk form", //required;
				description : "\n   " + "As a bonus action I  can shrink my companion to Tiny size or revert it to normal size" + "\n   " + "If the space does not allow my companion to grow, they take 1d10 damage instead" + "\n   " + "My companion cannot attack while Tiny", //required;
				action : ["bonus action", ""] //optional; adds the name of this feature to the bonus action list when chosen. The options are "action", "bonus action", and "reaction"

			},

			"stow" : { //has to be exactly the same as how it is written in the "choices" entry. Note the use of lower case!
				name : "Stowed Form",
				description : "\n   " + "As an action, I can stow my companion away(if within 5ft) in a pocket dimension" + "\n   " + "I can make my companion reappear wihtin 5ft of me as an action" + "\n   " + "My companion reappears within 5ft of me when I go unconscious",
				action : ["action", ""] //optional; adds the name of this choice to the reaction list when chosen. The options are "action", "bonus action", and "reaction" //the second value in the array is added as a suffix for the "name" of the feature when entered into the action field
			},

			"mask" : { //has to be exactly the same as how it is written in the "choices" entry. Note the use of lower case!
				name : "Masked Form",
				description : "\n   " + "As an action I can make an illusion making my companion appear as any humanoid/beast of similar size" + "\n   " +  "The illusion ends when my companion makes an attack or takes damage",
				action : ["action", ""] //optional; adds the name of this feature to the bonus action list when chosen. The options are "action", "bonus action", and "reaction"
			}
		},
		"advanced offence" : {
			name : "Advanced Offence",
			source : ["HB:SB", 5],
			minlevel : 5,
			description : "\n   " + "Choose an offensive using the \"Choose Feature\" button above",
			choices : ["expert commanding", "companion extra attack"],
			choicesNotInMenu : false,
			"expert commanding" : {
				name : "Expert Commanding",
				description : "\n   " + "My companion and I can attack and cast soulbinder spells on the same turn",
			},
			"companion extra attack" : {
				name : "Companion Extra Attack",
				description : "\n   " + "When my companion makes the attack action it can make 2 attacks as part of the same action"
			}
		},
		"advanced offence2" : {
			name : "Advanced Offence Second Option",
			source : ["HB:SB", 5],
			minlevel : 11,
			description : "\n   " + "Choose an offensive using the \"Choose Feature\" button above",
			choices : ["expert commanding", "companion extra attack"],
			choicesNotInMenu : false,
			"expert commanding" : {
				name : "Expert Commanding",
				description : "\n   " + "My companion and I can attack and cast soulbinder spells on the same turn",
			},
			"companion extra attack" : {
				name : "Companion Extra Attack",
				description : "\n   " + "When my companion makes the attack action it can make 2 attacks as part of the same action"
			}
		},
		"soul-linked casting" : {
			name : "Soul-Linked Casting", //any feature who's name is empty like this one is, will be ignored. Since v12.5 of the sheet, an entry like this serves no function
			source:["HB:SB", 5],
			minlevel : 5,
			description: "\n   " + "When I cast a spell that targets only myself, I can have the spell also affect my companion if they are within 60ft",
		},
		"companion's protection":{
			name:"Companion's Protection",
			source:["HB:SB", 5],
			minlevel:6,
			description:"\n   " + "My companion gains prof in all saving throws" + "\n   " + "While my companion is within 100ft it has adv. on Int and Cha saves",
		},
		"Resting Voice" : {
			name:"Resting Voice",
			source:["HB:SB", 5],
			minlevel:9,
			description:"\n   " + "I regain all expended edict uses on short or long rests"
		},
		"countermeasure" : {
			name : "Countermeasure",
			source : ["HB:SB", 5],
			minlevel : 10,
			description : "\n   " + "Choose an countermeasure using the \"Choose Feature\" button above",
			choices : ["revenge", "roar", "intercept"],
			choicesNotInMenu : false,
			"revenge" : {
				name : "Revenge",
				description : "\n   " + "When I am attacked, my companion can use its reaction to attack the enemy",
			},
			"roar" : {
				name : "Roar",
				description : "\n   " + "When I am attacked, my companion can use its reaction to impose disadvantage on the attack as long as the attacker is within 30ft and can hear them",
			},
			"intercept" : {
				name : "Intercept",
				description : "\n   " + "When I am am attacked, my companion(if within 5ft) can use its reaction to make itself the target of the attack",
			}
		},
		"soul purification" : {
			name : "Soul Purification",
			source : ["HB:SB", 6],
			minlevel : 14,
			description : "\n   " + "I can use my action to let my companion reattempt a saving throw against a lingering magical effect",
			action:  ["action", ""]
		},
		"infused energy" : {
			name : "Infused Energy",
			source : ["HB:SB", 6],
			minlevel : 18,
			description : "\n   " + "Once per long rest as an action I can infuse my companion for 1 minute adding my charisma modifier to its damage rolls",
			usage : 1,
			recovery : "long rest", 
			action : ["action", ""]
		},
		"quick renewal" : {
			name : "Quick Renewal",
			source : ["HB:SB", 6],
			minlevel : 20,
			description : "\n   " + "Once per long rest as an action I can renew my companion to full hit points(if within 120ft) even if dead",
			usage : 1,
			recovery : "long rest", 
			action : ["action", ""]
		},
		
	}
}