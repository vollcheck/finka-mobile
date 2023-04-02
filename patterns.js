const patterns = [
  {
    pattern: /hello/i,
    response: ["Hello! How are you today?"],
  },
  {
    pattern: /what is your name/i,
    response: ["My name is ELIZA. What can I help you with today?"],
  },
  {
    pattern: /i(?:'|\si)(m|am)\s(.*)/i,
    response: ["How do you feel about being {2}?"],
  },
  {
    pattern: /i(?:'|\si)(m|am)\s(.*)/i,
    response: ["How do you feel about being {2}?"],
  },
  {
    pattern: /i(?:'|\si)feel\s(.*)/i,
    response: ["Why do you feel {1}?"],
  },
  {
    pattern: /i(?:'|\si)(m|am)\s(.*)/i,
    response: ["Why do you think you're {1}?"],
  },
  {
    pattern: /i(?:'|\si)don(?:'|\si)t\s(.*)/i,
    response: ["Why don't you {1}?"],
  },
  {
    pattern: /i(?:'|\si)(.*)\syou/i,
    response: ["Why do you {1} me?"],
  },
  {
    pattern: /you(?:'|\si)(re|are)\s(.*)/i,
    response: ["Why do you think I'm {0}?"],
  },
  {
    pattern: /what(?:'|\s)is\s(.*)/i,
    response: ["Why do you ask what {1} is?"],
  },
  {
    pattern: /i(?:'|\si)want\s(.*)/i,
    response: ["Why do you want {1}?"],
  },
  {
    pattern: /i feel (.+)/i,
    response: [
      "Why do you feel {0}?",
      "Can you tell me more about why you feel {0}?",
    ],
  },
  {
    pattern: /my (.+) hurts/i,
    response: [
      "I'm sorry to hear that your {0} hurts. Can you describe the pain?",
      "When did your {0} start hurting?",
    ],
  },
  {
    pattern: /i hate (.+)/i,
    response: [
      "Why do you hate {0}?",
      "What specifically do you dislike about {0}?",
    ],
  },
  {
    pattern: /tell me about your (.+)/i,
    response: [
      "I'd rather hear about you. What do you want to talk about?",
      "I'm just a computer program, so I don't have feelings or experiences. Is there anything specific you want to discuss?",
    ],
  },
  {
    pattern: /how are you/i,
    response: [
      "I'm just a computer program, so I don't have feelings in the way humans do. But I'm functioning normally, thank you for asking.",
      "I'm here to help you, so let's focus on you. How can I assist you today?",
    ],
  },
  {
    pattern: /what do you think about (.+)/i,
    response: [
      "I don't have opinions in the way humans do, but I'm here to help you talk about {0}. Can you tell me more about why you're interested in it?",
      "I'm just a computer program, so I don't have the ability to think or form opinions. But I'm happy to listen to you talk about {0}.",
    ],
  },
  {
    pattern: /can you help me with (.+)/i,
    response: [
      "I'll do my best to assist you with {0}. Can you provide more information about what you need help with?",
      "Of course, I'm here to help you with {0}. Can you tell me more about what you're looking for?",
    ],
  },
  {
    pattern: /i love (.+)/i,
    response: [
      "It sounds like you have a strong emotional connection to {0}. Can you tell me more about why you love it?",
      "Love can be a powerful feeling. Can you describe what you love about {0}?",
    ],
  },
];

export default patterns;
