import type { Blueprint } from "../types";

// NOTE: Demo entries. Numbers are indicative only — This is not definitive.
// Last compiled on 2025-10-30.

export const blueprints: Blueprint[] = [
  {
    id: "sensor-light-blacky",
    title: "💡 Sensor Light — Motion / Door / Sun / LUX / Scenes",
    author: "Blacky",
    description:
      "Highly-configurable lighting automation with motion, presence (mmWave), ambient light, sun elevation, night mode, and manual bypass.",
    categories: ["lighting", "presence", "automation"],
    forumUrl:
      "https://community.home-assistant.io/t/sensor-light-motion-sensor-door-sensor-sun-elevation-lux-value-scenes-time-light-control-device-tracker-night-lights/481048",
    blueprintUrl:
      "https://gist.github.com/Blackshome/6edfec0ff6a25c5da0d07b88dc908238",
    lastUpdated: "2025-10-17",
    tags: ["lighting", "motion", "mmwave", "dynamic"],
    metrics: { gistStars: 194 },
  },
  {
    id: "bathroom-humidity-fan-blacky",
    title: "🚿 Bathroom Humidity Exhaust Fan",
    author: "Blacky",
    description:
      "Runs your extractor fan based on humidity rise/fall with safeguards, and links with Sensor Light to prevent shower blackouts.",
    categories: ["bathroom", "fan", "humidity"],
    forumUrl:
      "https://community.home-assistant.io/t/bathroom-humidity-exhaust-fan/509992",
    lastUpdated: undefined,
    tags: ["humidity", "fan", "linking"],
  },
  {
    id: "low-battery-blacky",
    title: "🪫 Low Battery Notifications & Actions",
    author: "Blacky",
    description:
      "Detects low/unavailable battery sensors and sends actionable notifications; dashboard helper support.",
    categories: ["notifications", "battery"],
    forumUrl:
      "https://community.home-assistant.io/t/low-battery-notifications-actions/653754",
    lastUpdated: "2025-08-30",
    tags: ["battery", "notifications"],
  },
  {
    id: "appliance-notify-blacky",
    title: "📳 Appliance Notifications & Actions (Washer/Dryer/Dishwasher)",
    author: "Blacky",
    description:
      "Detects machine cycles from power usage and notifies with optional actions and postponement handling.",
    categories: ["notifications", "appliances"],
    forumUrl:
      "https://community.home-assistant.io/t/appliance-notifications-actions-washing-machine-clothes-dryer-dish-washer-etc/650166",
    lastUpdated: "2025-08-27",
    tags: ["washing-machine", "dryer", "power"],
  },
  {
    id: "state-notify-blacky",
    title: "🔔 State Notifications & Actions",
    author: "Blacky",
    description:
      "Turn any state change (or numeric state) into cross-platform notifications with buttons and follow-up actions.",
    categories: ["notifications", "utility"],
    forumUrl:
      "https://community.home-assistant.io/t/state-notifications-actions/612617",
    blueprintUrl:
      "https://gist.github.com/Blackshome/06f6f28e76299267b813dac48608f549",
    lastUpdated: "2025-08-29",
    metrics: { gistStars: 5 },
    tags: ["notifications", "actions"],
  },
  {
    id: "notify-announcements-blacky",
    title: "📢 Notifications & Announcements (incl. TTS / UI alerts)",
    author: "Blacky",
    description:
      "Template notifications with device targeting, text-to-speech, UI display, and global time windows.",
    categories: ["notifications", "tts"],
    forumUrl:
      "https://community.home-assistant.io/t/notifications-announcements/728100",
    tags: ["tts", "mobile", "android", "ios"],
  },
  {
    id: "ikea-styrbar-epmatt",
    title: "🎛️ Controller — IKEA E2001/E2002 STYRBAR (Z2M/ZHA/deCONZ)",
    author: "EPMatt (Awesome HA Blueprints)",
    description:
      "Universal remote controller mapping with hooks for lights/media; supports double-press and long-press loops.",
    categories: ["controllers", "zigbee"],
    docsUrl:
      "https://epmatt.github.io/awesome-ha-blueprints/docs/blueprints/controllers/ikea_e2001_e2002/",
    lastUpdated: "2025-04-19",
    tags: ["controller", "ikea", "zigbee2mqtt", "zha"],
  },
  {
    id: "hue-dimmer-v2-epmatt",
    title: "🎚️ Controller — Philips Hue Dimmer v2 (Z2M/ZHA)",
    author: "EPMatt (Awesome HA Blueprints)",
    description:
      "Universal mapping for Hue Dimmer switch v2 with hooks for lights and media.",
    categories: ["controllers", "zigbee"],
    docsUrl:
      "https://epmatt.github.io/awesome-ha-blueprints/docs/blueprints/controllers/philips_929002398602/",
    tags: ["controller", "philips", "zigbee2mqtt", "zha"],
  },
  {
    id: "linked-entities-sync",
    title: "🔗 Linked Entities — keep lights/switches/fans in sync",
    author: "alexdelprete",
    description:
      "Synchronize ON/OFF and attributes (brightness, color temp, fan % speed) across multiple entities.",
    categories: ["utility", "lights", "fans"],
    forumUrl:
      "https://community.home-assistant.io/t/linked-entities-keep-mutlple-entities-state-in-sync-lights-switches-etc/662836",
    lastUpdated: "2024-07-10",
    tags: ["sync", "grouping"],
  },
  {
    id: "awtrix3-simple-apps",
    title: "🧱 AWTRIX 3 — simple apps for dummies",
    author: "10der",
    description:
      "Create simple dynamic apps for your AWTRIX 3 / Ulanzi clock from any HA entity.",
    categories: ["awtrix", "display", "mqtt"],
    forumUrl:
      "https://community.home-assistant.io/t/awtrix-3-blueprint-for-creating-simple-apps-for-dummies/726235",
    lastUpdated: "2025-03-13",
    tags: ["awtrix", "mqtt", "display"],
  },
];
