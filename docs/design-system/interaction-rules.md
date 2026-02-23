## Interaction rules

- **Hover**
  - Use subtle background and border shifts only.
  - Never introduce new colors on hover that are outside the token set.
  - Do not rely on hover alone for meaning; it is an enhancement.

- **Focus-visible**
  - All interactive components must have a clear `:focus-visible` state.
  - Use a 2px focus ring with `--color-border-focus` and an outline offset of 2px.
  - Do not remove focus outlines for keyboard interactions.

- **Active / pressed**
  - Use a slight darkening of background and an optional 0.5px downward translation.
  - Keep motion minimal and snappy – no bounce or easing-in-out overshoots.

- **Disabled**
  - Reduce opacity and remove shadows; cursor should not indicate clickability.
  - Do not change layout when toggling disabled state.

- **Selected**
  - Use a subtle background + border emphasis and maintain sufficient contrast.
  - Avoid combining too many cues (no icons + heavy border + strong background at once).

- **Motion**
  - Only use short transitions (80–160ms) for color, background, border, and shadow.
  - No decorative animations, loaders, or continuous motion.

## Error, warning, success

- **Inline input errors**
  - Use `--color-border-danger` and `--color-status-danger-bg` on the field container.
  - Display a short error message beneath the field in `--color-status-danger-text`.
  - Error messages should be concise and specific.

- **Form-level errors**
  - Use a banner pattern (to be implemented later) with the same danger tokens as inline errors.
  - Place close to the form heading; do not obscure content.

- **Warnings and non-blocking issues**
  - Use warning tokens with softer backgrounds and standard text size.
  - Do not use red for warnings – reserve red exclusively for errors.

- **Success feedback**
  - Use success tokens for lightweight confirmations (e.g., a small status pill or banner).
  - Avoid celebratory animations or confetti; keep the tone calm and confident.

## Empty and loading states

- **Empty states**
  - Provide a clear title, a short explanation, and at most one primary action.
  - Use low-contrast backgrounds and dashed borders to signal potential, not failure.
  - Do not show illustrations that feel playful or distracting.

- **Loading**
  - Prefer simple skeleton blocks and text placeholders over spinners.
  - Loading indicators should inherit the surrounding layout and spacing.
  - Avoid infinite shimmer; keep motion subtle and strictly functional if added later.

