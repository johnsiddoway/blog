---
title: Editing X-COM 2 Config Files
date: '2022-09-23'
layout: post.html
tags: posts
---

## Faction Heroes and Card Slots
You can increase the number of faction heroes available by finding and editing the following data. I haven't messed with changing the number of card slots, but I would hope that bumping up the ```NumCardsOnMeet``` from 2 to 3 would just let you pick an additional Resistance ... Power? Card? Whatever they're called in game.

> DefaultGameData.ini
```ini
[XComGame.XComGameState_ResistanceFaction]
MaxHeroesPerFaction=2
StartingCardSlots=0
NumCardsOnMeet=2
```