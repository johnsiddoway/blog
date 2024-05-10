---
title: Battletech Game JSON Customizations
date: '2022-09-24'
layout: post.html
tags: posts
---
BattleTech JSON Customizations
*As of 1.7*

### General Sim Game Constants
This block highlights a few places you can change:
* How frequently Kickstarter backers and Ronin pilots show up in the Hiring Hall
* When Loathed reputation kicks in (to address a bug with Pirates rep bottoming out)
* How many C-Bills you start with
* The random collection of rewards at the end of the Career period (defaults to 1200 days)

```
{
	"Story" : {
		"DefaultRoninHiringChance" : 0.08, // Bump this up
		"LoathedReputation" : -80, // Change this to -101
		"StartingCBills" : 980000, // Feel free to bump this up
		// These control the number of random missions per system
		"MaxContractsPerSystem" : 10,
		"ContractRenewalPerWeek" : 2,
		"ContractSuccessReduction" : 1.0,
		"MaxBreadcrumbsPerSystem" : 4,
	},
	"Career" : {
		"StartingSystems" : [
			"Arn",
			"Lyreton",
			"Lindsay",
			"Panzyr",
			"NewAbilene",
			"Claybrooke",
			"Illiushin",
			"Independence"
		],
		// Changing these all to `careerReward_6` will maximize the results regardless of the performance.
		"CareerRankRewards" : [
			"itemCollection_loot_careerReward_0",
			"itemCollection_loot_careerReward_1",
			"itemCollection_loot_careerReward_2",
			"itemCollection_loot_careerReward_3",
			"itemCollection_loot_careerReward_4",
			"itemCollection_loot_careerReward_5",
			"itemCollection_loot_careerReward_6"
		],
	}
}
```

### Career Mode Random Mechs
*Thanks to [Mpstark's comment on Reddit](https://www.reddit.com/r/Battletechgame/comments/bwqwkn/career_random_mech_list_thread_post_them_here_and/) for the specifics*

There are multiple files under `C:\Program Files (x86)\Steam\steamapps\common\BATTLETECH\BattleTech_Data\StreamingAssets\data\itemCollections` that are used to generate random lances on game start. The last number is weight, change to get an individual mech is the weight divided by the combined weight for that slot. So you've got a `4/11 ~= .36 = 36%` chance to get a Blackjack in slot 0.

> itemCollection_Mechs_Starting_0.csv
```
itemCollection_Mechs_Starting_0,,,
mechdef_blackjack_BJ-1,Mech,1,4
mechdef_vindicator_VND-1R,Mech,1,3
mechdef_centurion_CN9-A,Mech,1,2
mechdef_enforcer_ENF-4R,Mech,1,2
```

### Changing Mech found in the Argo
You can change the 'Mech reward found inside the Argo by tweaking `milestone_202_notify_centurion.json`'s Action Results. The below example changes it from an unequipped Centurion, to one with a full weapon compliment.

> milestone_202_notify_centurion.json
```
"Actions" : [
	{
		"Type" : "System_PauseNotification",
		"value" : "Good news, Commander. Once Doc Murad and her crew got that wrecked ship safely away, they found most of a [[DM.MechDefs[mechdef_centurion_CN9-A],Centurion]] in its cargo hold. It's equipped for combat and ready for service. Swing by the Mech Bay to check it out.",
		"additionalValues" : [
			"Centurion CN9-A",
			"castDef_YangDefault"
		],
		"valueConstant" : null
	},
	{
		"Type" : "Mech_AddRoster",
		"value" : "mechdef_centurion_CN9-A",
		"valueConstant" : null,
		"additionalValues" : null
	}
],
```

### Unlocking Flashpoints and Free Roam during Career Mode
*Thanks to [manuboar on Reddit](https://www.reddit.com/r/Battletechgame/comments/aw6er6/here_is_how_to_activate_the_flashpoints_and_free/)*

You can update any one of the milestone files, but a good one is `milestone_305_sim_argo_start.json`, which is when you get to use the Argo. Add the following two tages: `map_travel_3` and `SYSTEM_UseFlashpoints`.

> milestone_305_sim_argo_start.json
```
"Results" : [
{
	"Scope" : "Company",
	"Requirements" : null,
	"AddedTags" : {
		"items" : [
			"SYSTEM_UseFlashpoints", // This is added
			"SYSTEM_UseEvents",
			"SYSTEM_UseTime",
			"map_travel_1",
			"map_travel_2",
			"map_travel_2a",
			"map_travel_3", // This is added
			"oc04_post_argo"
		],
		"tagSetSourceFile" : ""
	}
}]
```

### Change Reward from Grave Robbing
I like to add the Star League era Black Knight to the list of rewards from Grave Robbing, so that I can get all of the Star League 'Mechs through the course of the game.

> milestone_423_notify_highlander.json
```
"Results" : [{
	"Actions" : [
		{
			"Type" : "System_PauseNotification",
			"value" : "In thanks for your help on Artru, I offer you this Star League-era [[DM.MechDefs[mechdef_highlander_HGN-732b],{DM.MechDefs[mechdef_highlander_HGN-732b].Description.Name}]] and this Star League-era [[DM.MechDefs[mechdef_blackknight_BL-6b-KNT],{DM.MechDefs[mechdef_blackknight_BL-6b-KNT].Description.Name}]], {COMMANDER.Callsign}. May they carry you to victory in the days to come.",
			"additionalValues" : [
				"Highlander HGN-732b",
				"Black Knight DL-6b-KNT",
				"castDef_KameaDefault"
			],
			"valueConstant" : null
		},
		{
			"Type" : "Mech_AddRoster",
			"value" : "mechdef_highlander_HGN-732b",
			"valueConstant" : null,
			"additionalValues" : null
		},
		{
			"Type" : "Mech_AddRoster",
			"value" : "mechdef_blackknight_BL-6b-KNT",
			"valueConstant" : null,
			"additionalValues" : null
		}
	],
}],
```

### Tweak Flamer Charges
At some point, Flamers were nerfed to only have 4 rounds of "ammo." This was done to reduce their abuse in PvP, but also severely hampered their capability in single player. To fix this, go find all Flamer files in `C:\Program Files (x86)\Steam\steamapps\common\BATTLETECH\BattleTech_Data\StreamingAssets\data\weapon`:
* `Weapon_Flamer_Flamer_0-STOCK.json`
* `Weapon_Flamer_Flamer_1-Hotshot.json`
* `Weapon_Flamer_Flamer_2-Olympus.json`

Find the `StartingAmmoCapacity` row (row 13 if the file is pretty-printed) and boost the value up from 4 to whatever-you-want. I usually do 6-8.