# Firebase Firestore Data Write Issue

This repository demonstrates a common issue encountered when writing data to a Firebase Firestore database. The problem involves the `set()` method seemingly succeeding without writing the intended data. The root cause is incorrect data formatting, specifically using dot notation in the data object. This readme provides details of the bug and its solution.