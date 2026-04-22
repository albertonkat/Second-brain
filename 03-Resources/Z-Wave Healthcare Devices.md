---
tags: [resource, zwave, healthcare, devices]
---

# Z-Wave Healthcare Devices

Reference for Z-Wave devices used in healthcare and ambient assisted living (AAL) contexts.

→ See also: [[Z-Wave Protocol]], [[Healthcare IoT MOC|07-MOCs/Healthcare IoT MOC]]

---

## Device Categories

### Fall Detection
- PIR motion sensors with Z-Wave (e.g., Ecolink, Fibaro Motion Sensor)
- Vibration/tilt sensors placed on furniture or wearables
- Door/window sensors for room-exit monitoring

### Vital Sign Monitoring
- Z-Wave does not natively carry continuous biometric streams; typically used as a trigger layer
- Paired with Bluetooth medical devices via a hub (e.g., SmartThings + Withings scale)

### Environmental Monitoring
- Temperature/humidity sensors (e.g., Aeotec MultiSensor 6)
- CO/smoke detectors for safety
- Flood sensors for bathroom/kitchen safety

### Medication Adherence
- Smart pill dispensers with Z-Wave alerts (e.g., MedMinder, Hero)
- Door sensors on medicine cabinets

---

## Common Z-Wave Healthcare Fingerprints

```groovy
// Aeotec MultiSensor 6 (motion + temp + humidity + lux + UV)
fingerprint mfr: "0086", prod: "0102", model: "0064", deviceJoinName: "Aeotec MultiSensor 6"

// Fibaro Motion Sensor (motion + temp + lux + vibration)
fingerprint mfr: "010F", prod: "0800", model: "1001", deviceJoinName: "Fibaro Motion Sensor"

// Ecolink Door/Window Sensor
fingerprint mfr: "014A", prod: "0001", model: "0001", deviceJoinName: "Ecolink Door Sensor"
```

---

## Relevant Command Classes

| Class | Use in Healthcare |
|---|---|
| `COMMAND_CLASS_SENSOR_MULTILEVEL` | Temperature, humidity, lux readings |
| `COMMAND_CLASS_ALARM` / `COMMAND_CLASS_NOTIFICATION` | Fall, motion, tamper alerts |
| `COMMAND_CLASS_BATTERY` | Battery status for wearables and sensors |
| `COMMAND_CLASS_WAKE_UP` | Battery-powered devices that sleep between reports |
| `COMMAND_CLASS_CONFIGURATION` | Tune sensitivity, report intervals |

---

## Integration Notes

- Z-Wave mesh requires at least one mains-powered device per ~30 ft for reliable coverage
- Use **S2 security** (or minimum S0) for medical-context devices to prevent spoofing
- Pair devices close to hub first, then move to final location to ensure mesh routing
