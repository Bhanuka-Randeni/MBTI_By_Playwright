export interface Question {
  id: number;
  question: string;
  answers: {
    a: string;
    b: string;
  };
}

export const questions: Question[] = [
  {
    id: 1,
    question: "At a party do you:",
    answers: {
      a: "Interact with many, including strangers",
      b: "Interact with a few, known to you",
    },
  },
  {
    id: 2,
    question: "Are you more:",
    answers: {
      a: "Focused on facts",
      b: "Focused on possibilities",
    },
  },
  {
    id: 3,
    question: "Is it worse to:",
    answers: {
      a: "Be too unrealistic",
      b: "Be too stuck in routine",
    },
  },
  {
    id: 4,
    question: "Are you more impressed by:",
    answers: {
      a: "Clear logic and principles",
      b: "Human feelings and values",
    },
  },
  {
    id: 5,
    question: "Are you more drawn toward the:",
    answers: {
      a: "Logical and convincing",
      b: "Emotional and moving",
    },
  },
  {
    id: 6,
    question: "Do you prefer to work:",
    answers: {
      a: "With clear deadlines and schedules",
      b: "In a more flexible, go-with-the-flow way",
    },
  },
  {
    id: 7,
    question: "When making choices, do you tend to be:",
    answers: {
      a: "Careful and deliberate",
      b: "Quick and spontaneous",
    },
  },
  {
    id: 8,
    question: "At social gatherings do you:",
    answers: {
      a: "Stay longer and feel energised by people",
      b: "Leave earlier and feel recharged by quiet time",
    },
  },
  {
    id: 9,
    question: "Do you find yourself drawn more to people who are:",
    answers: {
      a: "Practical and down-to-earth",
      b: "Creative and imaginative",
    },
  },
  {
    id: 10,
    question: "Are you more interested in:",
    answers: {
      a: "Concrete facts and realities",
      b: "Future possibilities and ideas",
    },
  },
  {
    id: 11,
    question:
      "When evaluating people or situations, are you more influenced by:",
    answers: {
      a: "Rules and principles",
      b: "Personal circumstances and context",
    },
  },
  {
    id: 12,
    question: "When dealing with others, is your approach more:",
    answers: {
      a: "Objective and focused on facts",
      b: "Personal and focused on people",
    },
  },
  {
    id: 13,
    question: "Are you more likely to be:",
    answers: {
      a: "Punctual and time-conscious",
      b: "Easy-going about time",
    },
  },
  {
    id: 14,
    question: "Does it bother you more to have things:",
    answers: {
      a: "Left unfinished",
      b: "Closed off too quickly",
    },
  },
  {
    id: 15,
    question: "In your social circles, do you usually:",
    answers: {
      a: "Stay up to date on what's going on",
      b: "Miss updates and catch up later",
    },
  },
  {
    id: 16,
    question: "When handling everyday tasks, are you more likely to:",
    answers: {
      a: "Follow established methods",
      b: "Try your own approach",
    },
  },
  {
    id: 17,
    question: "Writers should:",
    answers: {
      a: "Be clear and direct in what they say",
      b: "Use analogies and symbolic expression",
    },
  },
  {
    id: 18,
    question: "Which appeals to you more:",
    answers: {
      a: "Clear and consistent reasoning",
      b: "Harmony in relationships",
    },
  },
  {
    id: 19,
    question: "Are you more comfortable in making:",
    answers: {
      a: "Decisions based on logic",
      b: "Decisions based on personal values",
    },
  },
  {
    id: 20,
    question: "Do you prefer things to be:",
    answers: {
      a: "Settled and decided",
      b: "Open and flexible",
    },
  },
  {
    id: 21,
    question: "Would you say you are more:",
    answers: {
      a: "Serious and focused",
      b: "Relaxed and easy-going",
    },
  },
  {
    id: 22,
    question: "When making a phone call, do you usually:",
    answers: {
      a: "Just call and say what comes naturally",
      b: "Plan or rehearse what you'll say in advance",
    },
  },
  {
    id: 23,
    question: "Do you see facts as mainly:",
    answers: {
      a: "Standing on their own",
      b: "Showing bigger ideas or principles",
    },
  },
  {
    id: 24,
    question: "Do you find visionaries more:",
    answers: {
      a: "Annoying or impractical",
      b: "Fascinating and inspiring",
    },
  },
  {
    id: 25,
    question: "Are you more often:",
    answers: {
      a: "Calm and logical",
      b: "Caring and warm",
    },
  },
  {
    id: 26,
    question: "Is it worse to be:",
    answers: {
      a: "Being unfair",
      b: "Being unkind",
    },
  },
  {
    id: 27,
    question: "Do you think events should usually happen:",
    answers: {
      a: "Through careful planning and choice",
      b: "By letting things happen naturally",
    },
  },
  {
    id: 28,
    question: "Do you feel better about:",
    answers: {
      a: "Making a purchase and being done",
      b: "Having the option open to buy later",
    },
  },
  {
    id: 29,
    question: "In social settings, do you usually:",
    answers: {
      a: "Start conversations",
      b: "Wait for others to approach you",
    },
  },
  {
    id: 30,
    question: "Do you think common sense is:",
    answers: {
      a: "Usually reliable",
      b: "Often open to question",
    },
  },
  {
    id: 31,
    question: "Children often",
    answers: {
      a: "Don't do enough that's practical",
      b: "Don't use their imagination enough",
    },
  },
  {
    id: 32,
    question: "In making decisions do you feel more comfortable with:",
    answers: {
      a: "Clear rules and standards",
      b: "Feelings and values",
    },
  },
  {
    id: 33,
    question: "Are you more:",
    answers: {
      a: "Firm and direct",
      b: "Gentle and caring",
    },
  },
  {
    id: 34,
    question: "Which is more admirable:",
    answers: {
      a: "Being organized and methodical",
      b: "Being adaptable and resourceful",
    },
  },
  {
    id: 35,
    question: "Do you put more value on:",
    answers: {
      a: "The definite and certain",
      b: "Being open-minded and flexible",
    },
  },
  {
    id: 36,
    question: "Does meeting new people in unfamiliar situations:",
    answers: {
      a: "Energize and stimulate you",
      b: "Drain your energy",
    },
  },
  {
    id: 37,
    question: "Are you more often:",
    answers: {
      a: "Practical and down-to-earth",
      b: "Imaginative and fanciful",
    },
  },
  {
    id: 38,
    question: "Are you more likely to:",
    answers: {
      a: "Notice how others can be useful",
      b: "Understand how others see things",
    },
  },
  {
    id: 39,
    question: "Which is more satisfying:",
    answers: {
      a: "Discussing an issue thoroughly",
      b: "Reaching agreement on an issue",
    },
  },
  {
    id: 40,
    question: "Which guides you more:",
    answers: {
      a: "Your head (logic)",
      b: "Your heart (feelings",
    },
  },
  {
    id: 41,
    question: "Are you more comfortable with work that is:",
    answers: {
      a: "Structured and contracted",
      b: "Casual and flexible",
    },
  },
  {
    id: 42,
    question: "Do you tend to look for:",
    answers: {
      a: "Order and structure",
      b: "Whatever comes up",
    },
  },
  {
    id: 43,
    question: "Do you prefer:",
    answers: {
      a: "Many friends with shorter interactions",
      b: "A few close friends with deeper interactions",
    },
  },
  {
    id: 44,
    question: "Do you rely more on:",
    answers: {
      a: "Facts",
      b: "Principles and ideas",
    },
  },
  {
    id: 45,
    question: "Are you more interested in:",
    answers: {
      a: "Practical production and distribution",
      b: "Design and research",
    },
  },
  {
    id: 46,
    question: "Which is more of a compliment:",
    answers: {
      a: "You are a very logical person",
      b: "You are a very sentimental person",
    },
  },
  {
    id: 47,
    question: "Do you value more in yourself that you are:",
    answers: {
      a: "Steady and unwavering",
      b: "Loyal and devoted",
    },
  },
  {
    id: 48,
    question: "Do you more often prefer the:",
    answers: {
      a: "A final and firm statement",
      b: "A tentative and flexible statement",
    },
  },
  {
    id: 49,
    question: "Are you more comfortable:",
    answers: {
      a: "After a decision is made",
      b: "While options are still open",
    },
  },
  {
    id: 50,
    question: "Do you:",
    answers: {
      a: "Speak easily and at length with strangers",
      b: "Find little to say to strangers",
    },
  },
  {
    id: 51,
    question: "Are you more likely to trust your:",
    answers: {
      a: "Past experience",
      b: "Intuition or hunch",
    },
  },
  {
    id: 52,
    question: "Do you feel:",
    answers: {
      a: "More practical than inventive",
      b: "More inventive than practical",
    },
  },
  {
    id: 53,
    question: "Which person is more to be complimented for:",
    answers: {
      a: "Clear reasoning",
      b: "Strong feelings",
    },
  },
  {
    id: 54,
    question: "Are you inclined more to be:",
    answers: {
      a: "Fair-minded",
      b: "Sympathetic",
    },
  },
  {
    id: 55,
    question: "Is it preferable to:",
    answers: {
      a: "Make sure things are arranged",
      b: "Let things happen naturally",
    },
  },
  {
    id: 56,
    question: "In relationships should most things be:",
    answers: {
      a: "Open to re-negotiation",
      b: "Left to circumstance",
    },
  },
  {
    id: 57,
    question: "When the phone rings do you:",
    answers: {
      a: "Answer quickly yourself",
      b: "Prefer someone else to answer",
    },
  },
  {
    id: 58,
    question: "Do you value more in yourself:",
    answers: {
      a: "A strong sense of reality",
      b: "A vivid imagination",
    },
  },
  {
    id: 59,
    question: "Are you drawn more to:",
    answers: {
      a: "Fundamentals and basics",
      b: "Nuances and underlying meanings",
    },
  },
  {
    id: 60,
    question: "Which seems the greater error:",
    answers: {
      a: "Being too passionate",
      b: "Being too objective",
    },
  },
  {
    id: 61,
    question: "Do you see yourself as more:",
    answers: {
      a: "Hard-headed",
      b: "Soft-hearted",
    },
  },
  {
    id: 62,
    question: "Which situation appeals to you more:",
    answers: {
      a: "Structured and scheduled",
      b: "Unstructured and flexible",
    },
  },
  {
    id: 63,
    question: "Are you more:",
    answers: {
      a: "Routine-oriented than whimsical",
      b: "Whimsical than routine-oriented",
    },
  },
  {
    id: 64,
    question: "Are you more:",
    answers: {
      a: "Easy to approach",
      b: "Reserved",
    },
  },
  {
    id: 65,
    question: "In writing do you prefer:",
    answers: {
      a: "Literal expression",
      b: "Figurative expression",
    },
  },
  {
    id: 66,
    question: "Is it harder for you to:",
    answers: {
      a: "Understand others' feelings",
      b: "Make use of others' abilities",
    },
  },
  {
    id: 67,
    question: "Which do you wish more for yourself:",
    answers: {
      a: "Clear reasoning",
      b: "Strong compassion",
    },
  },
  {
    id: 68,
    question: "Which is the greater fault:",
    answers: {
      a: "Being too accepting",
      b: "Being too critical",
    },
  },
  {
    id: 69,
    question: "Do you prefer the:",
    answers: {
      a: "Planned events",
      b: "Unplanned events",
    },
  },
  {
    id: 70,
    question: "Do you tend to be more:",
    answers: {
      a: "Deliberate than spontaneous",
      b: "Spontaneous than deliberate",
    },
  },
  {
    id: 71,
    question: "You prefer to focus on:",
    answers: {
      a: "The outer world",
      b: "Your own inner world",
    },
  },
  {
    id: 72,
    question: "Do you prefer:",
    answers: {
      a: "To focus on basic information",
      b: "To interpret and add meaning",
    },
  },
  {
    id: 73,
    question: "When making decisions, do you first:",
    answers: {
      a: "Look at logic and consistency",
      b: "Consider people and circumstances",
    },
  },
  {
    id: 74,
    question: "In dealing with the outside world, you prefer to:",
    answers: {
      a: "Get things decided",
      b: "Stay open to new options",
    },
  },
];
