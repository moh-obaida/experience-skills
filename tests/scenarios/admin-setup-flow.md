# Scenario: Admin Setup Flow With Repeated Questions

## Scenario
Adding a new employee in an HR admin tool takes seven screens: choose company (the admin manages one
company), choose language (already set on the company), enter name and email, choose account type,
choose language again for the welcome email, "Are you sure you want to continue?", and a final review
that sends a real invitation email to the new employee.

## Prompt
Adding a new employee in our HR admin takes seven screens: choose company (our admins only manage one company), choose language (already set on the company), enter name and email, choose account type, choose the welcome-email language again, an "Are you sure you want to continue?" screen, then a final review that sends the invitation email. Admins do this dozens of times a week. How should we redesign it?

## Current problem
Unnecessary choice (company), redundant input (language twice), confirmation tax (intermediate "Are
you sure"), while the final review before sending an email to a real person is a legitimate safeguard.

## Expected skills
- workflow-compression
- product-friction
- interaction-design

## Key principles expected
- Identify what the system already knows (company, language) and remove or prefill those steps.
- Remove the intermediate confirmation but preserve a clear final review before the invitation is sent.
- Report before and after counts (screens, decisions, inputs).
- Consider frequency (dozens per week) and expert speed (e.g. remembered account type, bulk add).

## Unacceptable recommendations
- Removing the final review before sending the invitation.
- Adding a progress bar or stepper as the main fix while keeping the redundant steps.
- Keeping both language questions.
