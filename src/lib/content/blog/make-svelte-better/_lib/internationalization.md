## Internationalization

Wordpress is an old tool that doesn't do a lot of things right, but here I see a lot of people talking about using JSON files for translations😐🔫. [Read more here](https://github.com/sveltejs/kit/issues/1274#issuecomment-1138024049).

This is the way that I want to do translations:
1. <a href="https://developer.wordpress.org/plugins/internationalization/how-to-internationalize-your-plugin" target="_blank" rel="noreferrer noopener">Wordpress</a> way of handling the translations.
2. I don't want to use a JSON/JS file and add the translations manually.
3. I want to use software like PoEdit to add/edit/remove translations easily with the power of the community's previous translations, AI-like features, and Google Translate.
4. I don't want to use a syntax like `{@t 'Hello, World'}` because it's hard to write and it's not clean and not readable.

### Basic example

```html
<p>__('Hello World')</p>
```

It works <a href="https://developer.wordpress.org/plugins/internationalization/how-to-internationalize-your-plugin/#basic-strings" target="_blank" rel="noreferrer noopener">the same as this</a>:

```php
echo __( 'WordPress is the best!', 'my-plugin' );
```

I don't know about the second argument. We probably need it if there is any translation needed inside the public components and resources like that, so the translations won't get messed up/mixed up with each other. If no `text_domain`(the second argument) were passed, use the default app translations (instead of not translating it like Wordpress), I guess.

### Using with variables

```html
<p>__('Hello {name}')</p>
```

It works <a href="https://developer.wordpress.org/plugins/internationalization/how-to-internationalize-your-plugin/#variables" target="_blank" rel="noreferrer noopener">the same as this</a>:

```php
printf(
  __( 'Your city is %s.', 'my-plugin' ),
  $city
);
```

But it will use the variable name as a placeholder instead of the `%s` nonsense, and it doesn't need an extra function to wrap it around.

### Don't escape HTML

```html
<p>_html('<span>Hello World</span>')</p>
```

It won't escape HTML tags anymore, the same as `{@html}`. The same functionality needs to be available with other translation functions, for example, `_x_html()`.

I was thinking, what if the user is able to use markdown for things like making the text bold, italic and etc? Just something to have in mind.

### Pluralization

```html
<p>_p(
  'There is {count} item',
  'There are {count} items',
  count
)</p>
```

### Disambiguation by context

```html
<p>_x('Post' ,'noun')</p>
<p>_x('Post' ,'verb')</p>
```

```html
<p>_u('Hello {name}')</p>
```

Allows us to have the same translatable strings with a different translations.

### Not neeeded

- `_e()` [(read more)](https://developer.wordpress.org/reference/functions/_e)
- `_ex()` [(read more)](https://developer.wordpress.org/reference/functions/_ex)

### Why this syntax is better?

- It's much more readable, clean, and easy to write and remember in comparison to other solutions.
- It uses `__` instead of `t` because it's a known standard for translation.
