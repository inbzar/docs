/**
 * Custom sidebar definitions:
 * - To declare a sidebar element as part of the homepage sidebar, add className: 'homepage-sidebar-item'
 * - To add an icon:
 *   - add the icon in www/docs/src/theme/Icon/<IconName>/index.ts as a React SVG element if it doesn't exist, where `<IconName>` is the camel case name of the icon
 *   - add the mapping to the icon in www/docs/src/theme/Icon/index.js
 *   - add in customProps sidebar_icon: 'icon-name'
 * - To add a group divider add in customProps sidebar_is_group_divider: true and set the label/value to the title that should appear in the divider.
 * - To add a back item, add in customProps:
 *   - sidebar_is_back_link: true
 *   - sidebar_icon: `back-arrow`
 * - To add a sidebar title, add in customProps sidebar_is_title: true
 * - To add a group headline, add in customProps sidebar_is_group_headline: true
 * - To add a coming soon link (with a badge), add in customProps sidebar_is_soon: true
 * - To add a badge, add in customProps sidebar_badge with its value being the props to pass to the Badge component.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  homepage: [
    {
      type: 'doc',
      id: 'homepage',
      label: 'Overview',
      customProps: {
        sidebar_icon: 'book-open',
      },
      className: 'homepage-sidebar-item',
    },
    {
      type: "ref",
      id: "user-guide",
      label: "User guide",
      customProps: {
        sidebar_icon: "user",
      },
      className: "homepage-sidebar-item",
    },
    {
      type: 'category',
      label: 'Recipes',
      link: {
        type: 'doc',
        id: 'recipes/index',
      },
      customProps: {
        sidebar_icon: 'newspaper',
      },
      className: 'homepage-sidebar-item',
      items: [
        {
          type: 'doc',
          id: 'recipes/create-subscription-box',
          label: 'Create Subscription Box',
          customProps: {
            iconName: "cube-solid",
            exclude_from_doclist: true,
          },
        },
        {
          type: 'doc',
          id: 'recipes/subscription-box-with-onetime-and-recurring-payment',
          label: 'Subscription Box with Onetime and Recurring Payment',
          customProps: {
            iconName: "cash-solid",
          },
        },
        {
          type: 'doc',
          id: 'recipes/sell-digital-products',
          label: 'Sell Digital Products',
          customProps: {
            iconName: "book-open",
          },
        },
        {
          type: 'doc',
          id: 'recipes/sell-e-book',
          label: 'Sell E-Book',
          customProps: {
            iconName: "book-open",
          },
        },
        {
          type: 'doc',
          id: 'recipes/sell-services',
          label: 'Sell Services',
          customProps: {
            iconName: "cash-solid",
          },
        },
        {
          type: 'doc',
          id: 'recipes/subscription-box-with-digital-content',
          label: 'Subscription Box with Digital Content',
          customProps: {
            iconName: "cash-solid",
          },
        },
      ],
    },
    {
      type: 'category',
      label: 'Features',
      link: {
        type: 'doc',
        id: 'features/index',
      },
      customProps: {
        sidebar_icon: 'puzzle',
      },
      className: 'homepage-sidebar-item',
      items: [
        {
          type: 'doc',
          id: 'features/subscriptions',
          label: 'Subscriptions',
        },
        {
          type: 'doc',
          id: 'features/digital-library',
          label: 'Digital Library',
        },
        {
          type: 'doc',
          id: 'features/personal-payment-system',
          label: 'Personal Payment System',
        },
        {
          type: 'doc',
          id: 'features/marketing',
          label: 'Marketing',
        },
        {
          type: 'doc',
          id: 'features/referral',
          label: 'Referral',
        },
        {
          type: 'doc',
          id: 'features/chat',
          label: 'Chat',
        },
        {
          type: 'doc',
          id: 'features/analytics',
          label: 'Analytics',
        },
        {
          type: 'doc',
          id: 'features/web-builder',
          label: 'Web Builder',
        },
        {
          type: 'doc',
          id: 'features/regions-and-currencies',
          label: 'Regions and Currencies',
        },
        {
          type: 'doc',
          id: 'features/customers',
          label: 'Customers',
        },
        {
          type: 'doc',
          id: 'features/products',
          label: 'Products',
        },
        {
          type: 'doc',
          id: 'features/carts-and-checkout',
          label: 'Carts and Checkout',
        },
        {
          type: 'doc',
          id: 'features/orders',
          label: 'Orders',
        },
        {
          type: 'doc',
          id: 'features/multiwarehouse',
          label: 'Multi-Warehouse',
        },
        {
          type: 'doc',
          id: 'features/taxes',
          label: 'Taxes',
        },
        {
          type: 'doc',
          id: 'features/discounts',
          label: 'Discounts',
        },
        {
          type: 'doc',
          id: 'features/gift-cards',
          label: 'Gift Cards',
        },
        {
          type: 'doc',
          id: 'features/price-lists',
          label: 'Price Lists',
        },
        {
          type: 'doc',
          id: 'features/sales-channels',
          label: 'Sales Channels',
        },
        {
          type: 'doc',
          id: 'features/users',
          label: 'Users',
        },
      ],
    },
  ],
  userGuideSidebar: [
    {
      type: 'doc',
      id: 'user-guide',
      label: 'User Guide',
      customProps: {
        sidebar_is_title: true,
        sidebar_icon: 'user',
      },
    },
    {
      type: 'autogenerated',
      dirName: 'user-guide',
    },
  ],
}
