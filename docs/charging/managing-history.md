# Managing Charging History

KiloNorth provides a comprehensive view of your charging activities, helping you track energy usage and costs over time.

## 🕒 Viewing Your History
The **History** page groups your charging sessions by month, making it easy to review past performance at a glance.
- **Monthly Summaries**: Each month header displays total energy (kWh) and costs ($) for that period.
- **Session Cards**: Individual cards show the station name, energy added, total cost, and duration.
- **Interactive Map**: Tapping a session can show you where it happened.

## ✍️ Editing Sessions
If you need to update a past session:
1. Locate the session in your history.
2. Tap the **Edit** (pencil) icon.
3. Update the details in the modal and tap **Save**.
4. A success toast will confirm your changes.

## 🗑️ Deleting Sessions
To remove an accidental or incorrect entry:
1. Tap the **Delete** (trash) icon on the session card.
2. A **premium confirmation modal** will appear from the bottom of the screen.
3. Confirm the deletion.
4. A success toast will confirm the record has been removed.

## 📅 Date Selection
When logging or editing sessions, the **DatePicker** ensures data integrity:
- Only past dates (up to 5 years) can be selected.
- Future dates are automatically disabled.
- The "Next Month" button is hidden when viewing the current month to prevent future date nav.
