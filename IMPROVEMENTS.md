# Repository Improvement Review

This review is based on the current Next-Coffee codebase: a Next.js Pages Router app backed by JSON Server mock data.

## High Priority

- Replace hardcoded `http://localhost:4000` API URLs with a single configuration point, such as `NEXT_PUBLIC_API_URL` for browser requests and `API_URL` for server-side data fetching. This makes builds and deployments portable.
- Move from JSON Server mock persistence to a production-ready API before collecting real reservations, contact messages, or newsletter emails. The current setup is local-only and has no validation, authentication, spam protection, or durable database.
- Normalize the data model in `data/db.json`. The current resource names include `product`, `newsPaper`, and `massage`; clearer plural names such as `products`, `newsletterSubscriptions`, and `messages` would reduce confusion.
- Add form error and loading states. Contact, reservation, and newsletter flows currently depend on `alert()` and only handle the success path reliably.
- Add input validation beyond `required` attributes. The app should validate email format, date/time availability, party size, and minimum message content before POSTing.

## Quality And Maintainability

- Remove duplicated reservation implementations in `components/templates/Index/reservation.js` and `components/templates/Reservation/ReservationDetail.js`. A shared reservation form component would avoid behavior drift.
- Extract repeated menu rendering from `components/templates/Index/Menu.js`, `components/templates/Menu/Pricing.js`, and `components/templates/search/result.js`.
- Replace placeholder copy such as lorem ipsum and generic contact details with real business content or clearly named fixture content.
- Rename files and components consistently. Examples include lowercase component filenames, `reservation.js`, `result.js`, `serviceItem.js`, and `cart.js` mixed with PascalCase component names.
- Remove unused or dead code, including `components/modules/Form/form.js` if it is not planned for use.
- Clean up comments that came from copied markup or are no longer useful. Keep comments only where they explain non-obvious behavior.
- Consider changing package metadata from `exr-next` to a project-specific name such as `next-coffee`.

## Accessibility And UX

- Replace raw `<img>` elements with `next/image` where practical, especially product, service, testimonial, and about images. The current lint warnings identify these locations.
- Add missing `alt` text to decorative and content images. `components/templates/About/Story.js` and `components/templates/Index/About.js` are currently flagged.
- Add accessible labels to social links and icon-only controls.
- Replace empty links and `href="#"` placeholders with real routes, buttons, or removed UI.
- Fix React DOM attribute casing in the contact map iframe, such as `frameBorder`, `allowFullScreen`, and `tabIndex`.
- Make the navbar active state route-aware. The Home link is currently always styled as active.

## Performance

- Reduce the large global stylesheet. `styles/globals.css` contains a broad Bootstrap-style utility layer and custom theme styles; keeping only used utilities or importing a maintained CSS framework would lower maintenance cost.
- Avoid fetching all products on search if the data source grows. Use API-level filtering or search indexing when moving beyond mock data.
- Revisit Swiper defaults for mobile. Product comments force two slides per view, which may be cramped on small screens.

## Testing And Tooling

- Add a basic test strategy before changing business behavior. Useful first targets are product filtering, reservation form validation, and data rendering states.
- Add formatting tooling such as Prettier to reduce inconsistent spacing and quote style.
- Add CI checks for `npm run lint` and `npm run build`.
- Consider adding a type layer with TypeScript or runtime schemas for API resources. Current props assume every mock field exists and has the expected type.

## Deployment Readiness

- Add environment documentation once API URLs are configurable.
- Decide whether pages should be statically generated, server-rendered, or client-fetched after replacing JSON Server. The current static generation depends on the mock API being reachable during build.
- Define a license if the repository will be shared publicly.
