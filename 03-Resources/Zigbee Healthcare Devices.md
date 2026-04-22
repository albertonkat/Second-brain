---
tags: [resource, zigbee, healthcare, devices]
---

# Zigbee Healthcare Devices

Reference for Zigbee devices used in healthcare and ambient assisted living (AAL) contexts.

→ See also: [[Zigbee Protocol]], [[Healthcare IoT MOC|07-MOCs/Healthcare IoT MOC]]

---

## Device Categories

### Vital Sign Sensors
- Pulse oximeters (SpO2 + heart rate) — often paired via Zigbee HA profile
- Thermometers and multi-parameter patches
- Blood pressure monitors (typically Bluetooth; Zigbee gateway bridges)

### Environmental Monitoring
- Temperature/humidity sensors (e.g., Aqara, Sonoff SNZB-02)
- Air quality sensors (CO2, VOC, PM2.5)
- Water/flood sensors for bathroom safety

### Fall & Motion Detection
- PIR motion sensors (e.g., Philips Hue Motion, IKEA Trådfri)
- Vibration sensors (e.g., Aqara Vibration Sensor — cluster 0x0101)
- Presence sensors using mmWave radar (emerging Zigbee devices)

### Medication Adherence
- Contact sensors on pill organizers or cabinets
- Smart buttons to log medication taken events

---

## Common Zigbee Healthcare Fingerprints

```groovy
// Aqara Temperature & Humidity Sensor
fingerprint profileId: "0104", inClusters: "0000,0003,FFFF,0402,0403,0405",
            manufacturer: "LUMI", model: "lumi.weather", deviceJoinName: "Aqara Temp/Humidity"

// Sonoff SNZB-02 Temperature & Humidity
fingerprint profileId: "0104", inClusters: "0000,0001,0003,0402,0405",
            manufacturer: "eWeLink", model: "TH01", deviceJoinName: "Sonoff SNZB-02"

// Philips Hue Motion Sensor
fingerprint profileId: "0104", inClusters: "0000,0001,0003,0406,0400,0402",
            manufacturer: "Philips", model: "SML001", deviceJoinName: "Hue Motion Sensor"
```

---

## Relevant Cluster IDs

| Cluster | ID | Healthcare Use |
|---|---|---|
| Temperature Measurement | 0x0402 | Body temp, ambient temp |
| Relative Humidity | 0x0405 | Comfort and respiratory monitoring |
| Occupancy Sensing | 0x0406 | Motion / presence detection |
| IAS Zone | 0x0500 | Fall, tamper, water, smoke alerts |
| Power Configuration | 0x0001 | Battery level for wearables |
| Illuminance | 0x0400 | Light level (sleep monitoring) |

---

## Integration Notes

- Zigbee 3.0 devices are generally interoperable; older HA-profile devices may need custom handlers
- Zigbee mesh range is ~10 m indoors; mains-powered devices (plugs, bulbs) act as routers
- Use `zigbee.configureReporting()` to control how frequently devices push readings
- For medical accuracy, validate sensor calibration against certified instruments before clinical use
