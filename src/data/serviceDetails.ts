
interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  details: string[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  "pc-troubleshooting": {
    id: "pc-troubleshooting",
    title: "PC Troubleshooting",
    shortDescription: "Diagnose and fix slow performance, crashes, blue screens, startup issues, and other common computer problems.",
    fullDescription: "Our comprehensive PC troubleshooting service addresses the full spectrum of computer issues to restore optimal performance and functionality.",
    details: [
      "Initial diagnostic assessment to identify the root cause of performance issues, system crashes, blue screens, or startup problems.",
      "Hardware diagnostics to check for faulty components, overheating issues, or hardware conflicts.",
      "Software troubleshooting including operating system repairs, driver updates, and software conflict resolution.",
      "Virus and malware scanning and removal to clean infected systems.",
      "System optimization to improve speed and performance through cleanup of temporary files, startup programs management, and disk defragmentation.",
      "Memory management and virtual memory optimization to address resource-intensive applications.",
      "Recommendations for hardware upgrades if necessary to resolve performance bottlenecks.",
      "Step-by-step guidance on preventing similar issues in the future through proper maintenance practices."
    ]
  },
  "password-recovery": {
    id: "password-recovery",
    title: "Password Recovery",
    shortDescription: "Regain access to your accounts with our secure password recovery and account access solutions.",
    fullDescription: "Our password recovery service helps you regain access to locked accounts while maintaining proper security protocols and data protection measures.",
    details: [
      "Account access recovery for Windows, macOS, and Linux operating systems using secure, industry-standard methods.",
      "Email and cloud service account recovery assistance through verified recovery processes.",
      "Password manager database recovery for users locked out of their password management solutions.",
      "Data preservation techniques to ensure no loss of personal files during recovery procedures.",
      "Two-factor authentication recovery support for accounts with additional security measures.",
      "Setup of new security credentials following recovery with guidance on creating strong, memorable passwords.",
      "Implementation of password management solutions to prevent future lockouts.",
      "All recovery methods follow strict ethical guidelines and require proof of ownership."
    ]
  },
  "network-setup": {
    id: "network-setup",
    title: "Network Setup",
    shortDescription: "Professional installation and configuration of home or small business networks and Wi-Fi systems.",
    fullDescription: "Our comprehensive network setup service creates reliable, secure, and optimized wired and wireless networks for homes and small businesses.",
    details: [
      "Complete assessment of your space to determine optimal router placement and network architecture.",
      "Professional installation and configuration of routers, switches, access points, and mesh systems.",
      "Wi-Fi optimization to eliminate dead zones and ensure consistent coverage throughout your property.",
      "Network security implementation including strong encryption, firewall configuration, and guest network setup.",
      "Device connection and configuration for computers, smartphones, smart home devices, printers, and other networked equipment.",
      "Network naming and password setup with secure credentials that are easy for authorized users to remember.",
      "Quality of Service (QoS) configuration to prioritize critical applications and manage bandwidth effectively.",
      "Documentation of network details and basic troubleshooting guidance for common issues."
    ]
  },
  "custom-pc": {
    id: "custom-pc",
    title: "Custom PC Builds",
    shortDescription: "Custom-built computers designed for your specific needs, whether for gaming, work, or general use.",
    fullDescription: "Our custom PC building service creates personalized computer systems optimized for your specific requirements, preferences, and budget constraints.",
    details: [
      "Consultation to determine your exact needs, use cases, performance requirements, and budget considerations.",
      "Component selection tailored to your specific requirements, whether for gaming, content creation, office work, or general use.",
      "Premium assembly with careful cable management, proper cooling optimization, and thorough testing.",
      "Operating system installation and basic software setup according to your preferences.",
      "Performance optimization including BIOS configuration, driver installation, and system tuning.",
      "Complete documentation of system specifications and component warranties.",
      "Post-build support and troubleshooting to address any issues that might arise after delivery.",
      "Upgrade guidance for future component improvements to extend system lifespan."
    ]
  },
  "printer-setup": {
    id: "printer-setup",
    title: "Printer Setup",
    shortDescription: "Installation, configuration and troubleshooting for all types of printers and printing issues.",
    fullDescription: "Our printer setup service ensures your printing devices are properly installed, configured, and optimized for reliable performance across all your devices.",
    details: [
      "Physical setup and connection of printers via USB, network cable, or wireless configuration.",
      "Driver installation and updates for optimal compatibility with your devices and operating systems.",
      "Network printer configuration to enable printing from multiple computers and mobile devices.",
      "Wireless printing setup for convenient printing from anywhere in your home or office.",
      "Print queue management and default settings configuration according to your preferences.",
      "Paper handling setup including tray configuration and paper size settings.",
      "Scanner and multifunction device setup for scanning to email, folders, or the cloud.",
      "Basic troubleshooting training for common printing issues and maintenance procedures."
    ]
  },
  "data-recovery": {
    id: "data-recovery",
    title: "Data Recovery",
    shortDescription: "Recover lost or deleted files from computers, external drives, and other storage devices.",
    fullDescription: "Our data recovery service uses specialized techniques and tools to retrieve lost, deleted, or inaccessible data from various storage devices.",
    details: [
      "Initial assessment to determine the cause and extent of data loss (accidental deletion, drive failure, corruption, etc.).",
      "Non-destructive recovery attempts using specialized software tools to preserve original data integrity.",
      "Recovery from various storage media including hard drives, SSDs, USB drives, memory cards, and RAID arrays.",
      "File system repair for corrupted partitions that prevent normal access to your data.",
      "Specialized recovery for specific file types such as documents, photos, videos, and emails.",
      "Clean room procedures for physical drive damage cases requiring hardware intervention.",
      "Secure data handling practices with strict confidentiality protocols.",
      "Preventative advice and backup strategy recommendations to prevent future data loss scenarios."
    ]
  },
  "software-installation": {
    id: "software-installation",
    title: "Software Installation",
    shortDescription: "Professional installation and configuration of software applications for your specific needs.",
    fullDescription: "Our software installation service ensures applications are properly installed, configured, and optimized for your specific system and use case.",
    details: [
      "Clean installation of operating systems (Windows, macOS, Linux) with all necessary updates and drivers.",
      "Application software installation with proper configuration based on your requirements.",
      "Professional software suite setup for productivity, creative work, accounting, or specialized business needs.",
      "License management and registration to ensure proper software activation and compliance.",
      "Data migration from previous installations to new software versions when upgrading.",
      "Cross-platform compatibility configuration for environments using multiple operating systems.",
      "Custom settings optimization for improved workflow efficiency and user experience.",
      "Basic training on software features to help you maximize the value of your applications."
    ]
  },
  "virus-removal": {
    id: "virus-removal",
    title: "Virus Removal",
    shortDescription: "Comprehensive malware and virus detection and removal to protect your system and data.",
    fullDescription: "Our virus removal service thoroughly eliminates malware infections while implementing protective measures to prevent future security compromises.",
    details: [
      "Comprehensive system scanning using multiple professional-grade malware detection tools.",
      "Removal of viruses, trojans, ransomware, spyware, adware, and other malicious software.",
      "Boot-level cleanup for persistent malware that activates before the operating system loads.",
      "Browser cleanup including removal of unwanted extensions, hijacked settings, and cached malware.",
      "System repair of damaged or modified system files compromised by malware.",
      "Security software installation and configuration to prevent future infections.",
      "Implementation of best practices for ongoing protection and safe computing habits.",
      "Follow-up scanning and verification to ensure complete removal of all malicious code."
    ]
  },
  "hardware-repair": {
    id: "hardware-repair",
    title: "Hardware Repair",
    shortDescription: "Diagnosis and repair of hardware issues including component replacement and upgrades.",
    fullDescription: "Our hardware repair service addresses physical component failures and damage to restore functionality to your devices.",
    details: [
      "Diagnostic assessment to identify specific hardware components causing system failures or performance issues.",
      "Repair and replacement of internal components including motherboards, processors, memory, and storage devices.",
      "Display repair for monitors and laptop screens with brightness, color, or physical damage issues.",
      "Keyboard and input device replacement for computers with non-responsive or damaged keys.",
      "Power system repairs including replacement of power supplies, batteries, and charging components.",
      "Cooling system improvements to address overheating issues that can cause performance problems.",
      "Port and connector repairs for damaged USB, HDMI, audio, or power connections.",
      "Preventative maintenance to extend hardware lifespan and prevent future failures."
    ]
  },
  "tech-support": {
    id: "tech-support",
    title: "Remote Support",
    shortDescription: "Get help with technical issues from the comfort of your home via secure remote assistance.",
    fullDescription: "Our remote support service offers convenient technical assistance without requiring an in-person visit, saving you time while solving your technology problems.",
    details: [
      "Secure remote connection to your computer allowing our technicians to directly resolve issues while you watch.",
      "Real-time troubleshooting of software problems, error messages, and configuration issues.",
      "Guided support with clear communication throughout the process so you understand what's being done.",
      "Software updates and patch installation to address security vulnerabilities and fix bugs.",
      "System optimization to improve performance and responsiveness through various tuning techniques.",
      "Quick resolution of many common issues that don't require physical hardware intervention.",
      "Flexible scheduling options including evening and weekend availability for your convenience.",
      "Follow-up support to ensure the solutions implemented remain effective over time."
    ]
  },
  "system-upgrades": {
    id: "system-upgrades",
    title: "System Upgrades",
    shortDescription: "Boost your computer's performance with hardware upgrades that extend its useful life.",
    fullDescription: "Our system upgrade service enhances your existing computer's capabilities through strategic component improvements that maximize performance gain for your investment.",
    details: [
      "System assessment to identify performance bottlenecks and recommend the most cost-effective upgrades.",
      "Memory (RAM) upgrades to improve multitasking capability and overall system responsiveness.",
      "Storage upgrades including SSD installation to dramatically improve boot and load times.",
      "Graphics card upgrades for improved gaming performance or multi-monitor productivity setups.",
      "Processor upgrades when supported by your system architecture.",
      "Cooling system improvements to maintain stable performance during intensive tasks.",
      "Power supply upgrades to support additional components and ensure system stability.",
      "Performance testing before and after upgrades to demonstrate tangible improvements."
    ]
  },
  "response-times": {
    id: "response-times",
    title: "Quick Response",
    shortDescription: "Fast service with most issues resolved within 24-48 hours of your initial inquiry submission.",
    fullDescription: "Our quick response service ensures your technical issues are addressed promptly to minimize downtime and disruption to your work or personal activities.",
    details: [
      "Rapid initial response to inquiries typically within 2-4 business hours.",
      "Expedited appointment scheduling for urgent technical issues affecting productivity.",
      "Same-day service availability for critical problems when scheduled early in the day.",
      "Remote support options for immediate assistance with software-related issues.",
      "Transparent communication about expected resolution timeframes based on issue complexity.",
      "Priority scheduling system for existing customers with ongoing support arrangements.",
      "After-hours emergency support for business clients with mission-critical systems.",
      "Regular status updates for more complex issues requiring extended resolution time."
    ]
  }
};
