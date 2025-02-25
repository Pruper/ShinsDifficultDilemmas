function startGame() {
    INSTANT_TEXT = false;
    displayText("Shin's Difficult Dilemmas\n\n\nWelcome to my game about Blaine Harden's book, Escape from Camp 14.\n\n\nToday, you will be presented with a series of choices that the main character Shin faced on his path to escape North Korea...\n\n\nWill you do as Shin did? Let's find out.",
        () => {
            showChoices([{ text: "Start", action: choice1 }, {
                text: "Start (no text antimation)", action: () => {
                    INSTANT_TEXT = true;
                    choice1();
                }
            }]);
        }
    );
}

function choice1() {
    displayText("You're a young boy. Every morning at 4 AM, your mother wakes up and makes food for both of you before heading to work. You would eat yours when you got hungry and your mother would eat hers after she got back from her work in the fields.\n\n\nOne day, you finish your food but are still hungry. Your mother's food is still there, unguarded.\n\n\nWhat would you do?",
        () => {
            showChoices([
                {
                    text: "Steal your own mother's food",
                    action: () => {
                        displayText("Same choice\n\n\nWhen your mother returns, you are beaten for filching her food and told not to do it again. But you would continue to do it anyway... keeping away starvation.\n\n—\n\nDuring his early childhood, Shin subsisted on a watery cornmeal soup, which was not very filling, so he would steal his mother's. Despite being beaten for it, Shin would continue doing so.\n\n\nWhile this may seem selfish, in Camp 14, Shin and other children did not know that \"civilized\" children should love their mother.\n\n\nShin saw his mother as competition for survival.",
                            () => {
                                showChoices([{ text: "Next", action: choice2 }]);
                            },
                            "lime"
                        );
                    }
                },
                {
                    text: "Leave it alone",
                    action: () => {
                        displayText("Different choice\n\n\nYou avoided stealing your mother's food. While this kept her a bit stronger and prevented her going hungry, you suffer badly from malnutrition and your chances of survival are diminished...\n\n—\n\nDuring his early childhood, Shin subsisted on a watery cornmeal soup, which was not very filling, so he would steal his mother's. Despite being beaten for it, Shin would continue doing so.\n\n\nWhile this may seem selfish, in Camp 14, Shin and other children did not know that \"civilized\" children should love their mother.\n\n\nShin saw his mother as competition for survival.",
                            () => {
                                showChoices([{ text: "Next", action: choice2 }]);
                            },
                            "red"
                        );
                    }
                }
            ]);
        }
    );
}

function choice2() {
    displayText("You've grown up a bit, though your life remains one of hunger and isolation. One day, you and some other boys from the village caught some rats. One kid proposes that you all should have them as a meal.\n\n\nWhat would you do?",
        () => {
            showChoices([
                {
                    text: "Do not eat the rat",
                    action: () => {
                        displayText("Different choice\n\n\nYou avoided eating the rat, due to it looking disgusting, but the other kids didn't hesitate. Their bellies were fuller due to your refusal, and you were hungrier and more malnourished as a result. Maybe it would have been better to take what you could get, even if it seemed gross...\n\n—\n\nDuring his early childhood, Shin and his friends would capture and eat rats, frogs, snakes, and insects. While it sounds disgusting, Shin did what he had to do to avoid starvation.\n\n\nLater, Shin would recount that some of his happiest memories from childhood were when his belly was full.",
                            () => {
                                showChoices([{ text: "Next", action: choice3 }]);
                            },
                            "red"
                        );
                    }
                },
                {
                    text: "Eat your rat",
                    action: () => {
                        displayText("Same choice\n\n\nYou and the other boys roasted the rats over a coal grill and ate them, sating your hunger, at least for now. The rat provides you with important protein and allows you to avoid pellagra, a disease causing weakness, skin lesions, diarrhea, and dementia.\n\n\n\nThis becomes a common occurence for you, and you continue to catch and eat pests over the following years to feed yourself.\n—\n\nDuring his early childhood, Shin and his friends would capture and eat rats, frogs, snakes, and insects. While it sounds disgusting and unpalatable, Shin did what he had to do to avoid starvation.\n\n\nLater, Shin would recount that some of his happiest memories from childhood were when his belly was full.",
                            () => {
                                showChoices([{ text: "Next", action: choice3 }]);
                            },
                            "lime"
                        );
                    }
                }
            ]);
        }
    );
}

function choice3() {
    displayText("You've started school, learning basic literacy and numeracy. However, you likely won't end up needing it... you are largely being trained for hard labor, not any true education.\n\n\nOne day, the teacher appears to be in a bad mood. He springs a surprise search and has every kid empty their pockets. The teacher finds five kernels of corn belonging to a pretty girl and, after yelling at her for stealing food, the teacher begins beating her badly.\n\n\nWhat would you do?",
        () => {
            showChoices([
                {
                    text: "Stand up for the girl",
                    action: () => {
                        displayText("Different choice\n\n\nYou attempt to stand up for the girl, trying to stop the teacher from killing her. Unfortunately, this only angers him further, and he takes it out on you instead. You're beaten harshly and cruelly, and end up passing away unconsciously in the night.\n\n—\n\nWhile standing up for your fellow student might seem like a good idea, the last thing you want to do in a prison camp is to openly challenge authority.\n\n\nThere were many rules at Camp 14, and stealing or concealing foodstuffs was highly forbidden. Teachers did not usually take this rule seriously, but this girl had been unlucky.\n\n\nShin learned to be respectful and obedient towards his teachers.",
                            () => {
                                showChoices([{ text: "Next", action: choice4 }]);
                            },
                            "red"
                        );
                    }
                },
                {
                    text: "Do nothing and watch",
                    action: () => {
                        displayText("Same choice\n\n\nYou've learned by now not to put yourself at risk, especially not with the teacher in a foul mood. The girl is beaten bloody and unconscious, and ends up dying later that night.\n\n—\n\nWhile standing up for your fellow student might seem like a good idea, the last thing you want to do in a prison camp is to openly challenge authority.\n\n\nThere were many rules at Camp 14, and stealing or concealing foodstuffs was highly forbidden. Teachers did not usually take this rule seriously, but this girl had been unlucky.\n\n\nShin learned to be respectful and obedient towards his teachers, because the alternative was NOT desirable.",
                            () => {
                                showChoices([{ text: "Next", action: choice4 }]);
                            },
                            "lime"
                        );
                    }
                }
            ]);
        }
    );
}

function choice4() {
    displayText("One day, after school winds down, the teacher surprises you by offering you to go and spend the night at home instead of in the cold dormitory. It's a reward for good behavior.\n\n\nTo your surprise, your older brother He Geun had come home as well from the camp's cement factory. It seems unlikely that he would have been granted a similar reward, since he is not a hard worker. Neither he nor your mother seem happy to see you.\n\n\nAfter you go to bed, you hear your mother and brother talking. By listening to their conversation, you learn they are planning to escape... without you.\n\n\nWhat would you do?",
        () => {
            showChoices([
                {
                    text: "Confront them about it and demand to come",
                    action: () => {
                        displayText("Different choice\n\n\nTo keep you quiet, your family agrees to bring you along. You learn that your brother had bribed a guard to let you through the fence... unfortunately, when you try to leave, it turns out to be a trick and the three of you are shot.\n\n—\n\nWhile not known and never confirmed in the story that this is what happened with Shin's brother, guards often would lure prisoners to try and make an escape. The prisoners would be captured and killed, and the guard would receive a reward (usually the opportunity to go to college)\n\n\nShin was ashamed about the fact that he ratted his family out, and omitted it from the original publication of Escape from Camp 14.\n\n\nHowever, ratting out his family who had fully intended to leave him behind to suffer the consequences may have ended up saving Shin's life.",
                            () => {
                                showChoices([{ text: "Next", action: choice5 }]);
                            },
                            "red"
                        );
                    }
                },
                {
                    text: "Sneak away and inform someone",
                    action: () => {
                        displayText("Same choice\n\n\nYou sneak out of the house, finding a friend Hong, who suggests telling a guard. You go to the guard and, after offering the information in exchange for food and the position of class leader. He thanks you and tells you to go back to the dormitory.\n\n—\n\nWhile not known and never confirmed in the story that this is what happened with Shin's brother, guards often would lure prisoners to try and make an escape. The prisoners would be captured and killed, and the guard would receive a reward (usually the opportunity to go to college)\n\n\nShin was ashamed about the fact that he ratted his family out, and omitted it from the original publication of Escape from Camp 14.\n\n\nHowever, ratting out his family who had fully intended to leave him behind to suffer the consequences may have ended up saving Shin's life.",
                            () => {
                                showChoices([{ text: "Next", action: choice5 }]);
                            },
                            "lime"
                        );
                    }
                }
            ]);
        }
    );
}

function choice5() {
    displayText("The morning after ratting out your mother and brother, guards come and take you in for questioning. Unfortunately, the guard you ratted them out to claimed all the credit for himself and did not name you as the informant. The officers who took you in begin torturing you BADLY, not believing you when you truthfully claim to not have known about the plot.\n\n\nWhat would you do?",
        () => {
            showChoices([
                {
                    text: "Keep sticking by the truth",
                    action: () => {
                        displayText("Same choice\n\n\nYou continue to stick by the truth. The guards don't believe you and torture you to the brink of death, but eventually you manage to get out that you were the informant, begging them to check with your friend Hong, who knew about it. Hong confirms your story, saving your life, though you are horribly weak and will need months to recover.\n\n—\n\nShin remembers paralyzing confusion when the interrogators continually demanded the truth and did not believe him after he told them.\n\n\nFortunately for Shin, Hong had been able to vouch for him, which likely saved his life, though he was badly injured.\n\n\nAfter this harrowing experience, Shin met for the first time a man named Uncle, who helped him recover and was the first person to show Shin genuine care and affection. His stories of grilled meat awakened Shin to the possibility that there was a better life outside of the fence.",
                            () => {
                                showChoices([{ text: "Next", action: choice6 }]);
                            },
                            "lime"
                        );
                    }
                },
                {
                    text: "Stop the torture by making a fake confession",
                    action: () => {
                        displayText("Different choice\n\n\nDesperate to stop the pain, you confess, making up details about the plot and your role in it. The torture ends up stopping, but terrifyingly, this does not save you as you had hoped. A few weeks later, you join your mother and brother in execution.\n\n—\n\nShin remembers paralyzing confusion when the interrogators continually demanded the truth and did not believe him after he told them.\n\n\nFortunately for Shin, Hong had been able to vouch for him, which likely saved his life, though he was badly injured.\n\n\nAfter this harrowing experience, Shin met for the first time a man named Uncle, who helped him recover and was the first person to show Shin genuine care and affection. His stories of grilled meat awakened Shin to the possibility that there was a better life outside of the fence.",
                            () => {
                                showChoices([{ text: "Next", action: choice6 }]);
                            },
                            "red"
                        );
                    }
                }
            ]);
        }
    );
}

function choice6() {
    displayText("You managed to recover thanks to Uncle's caring treatment. After being released, you go back to school and eventually are sent to work at a pig farm, before being transferred to a garment factory.\n\n\nAt the factory, just like in the camp, snitching is highly encouraged. One day, you are asked to keep an eye on a newcomer named Park.\n\n\nPark did not originate from the camp, but was from outside. He tells you about stuff you never knew before, about the outside world, about South Korea and China, about modern luxuries like the internet and money being able to buy whatever food you want.\n\n\nEventually, you are asked to inform if Park said anything unusual.\n\n\nWhat would you do?",
        () => {
            showChoices([
                {
                    text: "Don't snitch on Park",
                    action: () => {
                        displayText("Same choice\n\n\nYou made your first free decision... not snitching. As a result, you get to learn more from Park about the outside world and the dystopian nature of North Korea, increasing your desire to make it out of here.\n\n—\n\nShin's first decision that was truly his own was deciding not to snitch on Park, which was a supremely important one.\n\n\nShin admits that his reasons for not snitching were selfish... he could have informed on Park and been rewarded with extra food, but he chose not to because he considered Park's stories of hope more important than any meal.",
                            () => {
                                showChoices([{ text: "Next", action: choice7 }]);
                            },
                            "lime"
                        );
                    }
                },
                {
                    text: "Snitch to gain favor with the guards",
                    action: () => {
                        displayText("Different choice\n\n\nYou snitch, and Park is taken away to an unknown fate. His stories of a better world linger on in your mind, but unfortunately, due to a lack of knowledge you are never able to act on them. You remain living in Camp 14 until your death.\n\n—\n\nShin's first decision that was truly his own was deciding not to snitch on Park, which was a supremely important one.\n\n\nShin admits that his reasons for not snitching were selfish... he could have informed on Park and been rewarded with extra food, but he chose not to because he considered Park's stories of hope more important than any meal.",
                            () => {
                                showChoices([{ text: "Next", action: choice7 }]);
                            },
                            "red"
                        );
                    }
                }
            ]);
        }
    );
}

function choice7() {
    displayText("You and Park, after witnessing a bad lice treatment cause the deaths of several prisoners, decide to hatch your escape plan.\n\n\nYou know the camp, and Park knows the world... together you can make it out of this hell.\n\n\nOn the day of your escape, you head for the electric fence boundary during the interval between guard patrols. Unfortunately, Park, who had gone first, touched the fence by accident and collapsed, not moving, in critical condition.\n\n\nWhat would you do?",
        () => {
            showChoices([
                {
                    text: "Try to save Park",
                    action: () => {
                        displayText("Different choice\n\n\nYou try to save Park, your friend, because you need him to be able to figure out how to get to China. Unfortunately, you're electrecuted trying to save him, which paralyzes you and leaves you lying on the ground. Unable to move, you are spotted and the guards take care of you... RIP.\n\n—\n\nPark had never told Shin how to reach China. Yet Shin could not afford to risk his own life when Park may have already been killed by the powerful electric current.\n\n\nLeaving Park behind may seem like a betrayal, especially to one who has people they care about. Shin may have had a beneficial relationship with Park, but the recurring theme for survival in North Korea should be clear now. You cannot get attached, and you MUST put yourself first... or die.",
                            () => {
                                showChoices([{ text: "Next", action: choice8 }]);
                            },
                            "red"
                        );
                    }
                },
                {
                    text: "Try to make it on your own",
                    action: () => {
                        displayText("Same choice\n\n\nYou climb through the fence, stepping on Park's body to get out. Unfortunately, you slip, touching the fence briefly. The electricity hurts you badly, burning your legs, but you manage to make it out, running as fast as you possibly can.\n\n—\n\nPark had never told Shin how to reach China. Yet Shin could not afford to risk his own life when Park may have already been killed by the powerful electric current.\n\n\nLeaving Park behind may seem like a betrayal to some people in the West, where attachment is importand and cherished. Shin may have had a beneficial relationship with Park, but the recurring theme for survival in North Korea should be clear now. You cannot get attached, and you MUST put yourself first... or die.",
                            () => {
                                showChoices([{ text: "Next", action: choice8 }]);
                            },
                            "lime"
                        );
                    }
                }
            ]);
        }
    );
}

function choice8() {
    displayText("After escaping from Camp 14, you find your way north. By scavenging and stealing for your own survival, you're able to bribe some guards and make it across the border to China, and you head south after a brief stint on a farm.\n\n\nOne day, while looking for work in a restaurant, you're told to speak with a man who knows Korean.\n\n\nAs you begin to talk to the man, he takes out a pad of paper and begins writing everything you're saying down, before he asks if you want to go to South Korea.\n\n\nWhat would you do?",
        () => {
            showChoices([
                {
                    text: "Say yes",
                    action: () => {
                        displayText("Same choice\n\n\nDespite your reservations, you decided to trust the mysterious man. You don't realize it now, but he is a journalist. He suggests that the two of you leave the restaurant together in a taxi. You panic a bit when you reach the South Korean consulate and see Chinese police, but you're able to make it through without suspicion. You are free.\n\n—\n\nWhen meeting the journalist, Shin had been panicked when the journalist had taken him in a taxi. He had worried about being arrested when they arrived at the South Korean consulate.\n\n\nThe CCP had been working since 2002 to curb North Korean defectors from using foreign embassies as a means of escape from their country.\n\n\nYet Shin's choice ultimately paid off. He was FINALLY safe from China and the DPRK... he got to go to South Korea.",
                            () => {
                                showChoices([{ text: "Next", action: choice9 }]);
                            },
                            "lime"
                        );
                    }
                },
                {
                    text: "Say no",
                    action: () => {
                        displayText("Different choice\n\n\nYou are alarmed and a bit suspicious of the man's intentions, so you say no and walk away. Little do you know, you had been talking to a journalist and he had been genuine. Days later, you find work in China and are able to live somewhat comfortably, but you never shake the feeling of needing to look over your shoulder. This is hardly the worst outcome for you, but your unique life story will never reach Western ears.\n\n—\n\nWhen meeting the journalist, Shin had been panicked when the journalist had taken him in a taxi. He had worried about being arrested when they arrived at the South Korean consulate.\n\n\nThe CCP had been working since 2002 to curb North Korean defectors from using foreign embassies as a means of escape from their country.\n\n\nYet Shin's choice ultimately paid off. He was FINALLY safe from China and the DPRK... he got to go to South Korea.",
                            () => {
                                showChoices([{ text: "Next", action: choice9 }]);
                            },
                            "red"
                        );
                    }
                }
            ]);
        }
    );
}

function choice9() {
    displayText("Now safely in South Korea, you’re faced with the cultural shock of freedom. Authorities and society encourage you to share your story, however, you remained burden with the scars of your past and the shame of the things you did... ratting out your mother, snitching, being broken by torture, and more.\n\n\nEven if you had to do it to survive, you are worried that viewing your actions from a Western cultural lens will make your actions seem evil.\n\n\nWhat would you do?",
        () => {
            showChoices([
                {
                    text: "Hide the full truth for now",
                    action: () => {
                        displayText("Same choice\n\n\nYou decide to temper your story, revealing only what is acceptable to those around you. For Western society, which values clear-cut narratives of heroism and redemption, you leave out the darker shades of your survival. While this makes your tale more palatable, the weight of your hidden actions haunts you.\n\n—\n\nWhen Shin first told his story for Escape from Camp 14 to Blaine Harden, he omitted certain details. Unfortunately, hiding the truth became like a prison for Shin.\n\n\nAfter a video of his father, alive, was released, Shin decided to set the record straight. And this was a good thing, too, as Shin had by then become one of the most famous North Korean defectors.\n\n\nShin's story, despite its imperfections and original ommissions, is the only one from someone BORN into a prison camp that ended up escaping.",
                            () => {
                                showChoices([{ text: "See Results", action: results }]);
                            },
                            "lime"
                        );
                    }
                },
                {
                    text: "As painful as it is, get the whole story out there",
                    action: () => {
                        displayText("Different choice\n\n\nYou choose to bare your soul, exposing every brutal truth—even those that paint you in a harsh light. The full account of your survival, with all its painful betrayals and difficult choices, is shared openly. You feel liberated from the burden of secrecy. By embracing all your life experience, you hope others may come to understand that in the depths of oppression, the line between right and wrong is often blurred.\n\n—\n\nWhen Shin first told his story for Escape from Camp 14 to Blaine Harden, he omitted certain details. Unfortunately, hiding the truth became like a prison for Shin.\n\n\nAfter a video of his father, alive, was released, Shin decided to set the record straight. And this was a good thing, too, as Shin had by then become one of the most famous North Korean defectors.\n\n\nShin's story, despite its imperfections and original ommissions, is the only one from someone BORN into a prison camp that ended up escaping.",
                            () => {
                                showChoices([{ text: "See Results", action: results }]);
                            },
                            "red"
                        );
                    }
                }
            ]);
        }
    );
}

const choiceSummaries = [
    {
        choice: 1,
        same: "Stole your own mother's food",
        different: "Left your own mother's food alone"
    },
    {
        choice: 2,
        same: "Ate rats for nourishment",
        different: "Shied away from eating pests"
    },
    {
        choice: 3,
        same: "Witnessed cruelty from the sidelines",
        different: "Stood up to camp authority, at your own peril"
    },
    {
        choice: 4,
        same: "Ratted out your mother and brother",
        different: "Tried and failed to escape with your mother and brother"
    },
    {
        choice: 5,
        same: "Stuck by the truth even while tortured",
        different: "Forced to give false confession to interrogators"
    },
    {
        choice: 6,
        same: "Decided not to snitch on Park",
        different: "Snitched on Park for an extra meal"
    },
    {
        choice: 7,
        same: "Left Park behind to escape",
        different: "Tried to save Park and got caught escaping"
    },
    {
        choice: 8,
        same: "Trusted a mysterious journalist and got to South Korea",
        different: "Failed to trust journalist and escape from China"
    },
    {
        choice: 9,
        same: "Omitted parts of your story to make it more palatable",
        different: "Shared your whole story, as painful as it was"
    }
]

function results() {
    displayText("Here are your results...", () => {
        showChoices([{ text: "Text", action: gameEnding }]);
    });

    let html = "";
    let sameNumber = 0;
    for (let i = 0; i < choicesMade.length; i++) {
        if (choicesMade[i] == "same") {
            sameNumber++;
            html += `<p style="color:lime;">SAME - ${choiceSummaries[i].same}</p>`;
        } else {
            html += `<p style="color:red;">DIFFERENT - ${choiceSummaries[i].different}</p>`;
        }
    }

    resultsDiv.innerHTML = `<h1>Score: ${sameNumber}/9 choices the same as Shin</h1>` + html;
}

function gameEnding() {
    resultsDiv.innerHTML = `<img src="kim_pixel_art.png"></img>`;
    displayText("Well, you made it through the game. Did you expect Shin to do the things that he did? Would you have gone to such lengths to survive in such a hopeless situation?\n\n\nThis game was more than just a series of choices. It is a reflection on the brutal reality that many have endured and still endure even to this day. Through Shin's story, we confront the complex nature of survival and the moral dilemmas that come with it.\n\n\nThe purpose of this book, and of this game, is to shed light on the hidden suffering of those still trapped in the camps... including children just like Shin who are put in these kinds of situations every day.\n\n\nThese are not mere statistics or headlines. These are human lives being shaped by unimaginable cruelty. Remember that the choices made in extreme circumstances are not about good or evil in the conventional sense, but about the desperate will to live in the face of overwhelming oppression.", () => {
        showChoices([{ text: "Play Again", action: resetGame }]);
    });
}