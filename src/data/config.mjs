const config = {
    'download': {
        'chunkSize': 2,
        'maxFileSizeBytes': 4194304 // 4 * 1024 * 1024
    },
    'path': {
        'root': './data/', //'./data-{{data__unix}}/',
        'sitemap': {
            'source': '{{data__root}}{{data__project__name}}/sitemap.json',
            'content': '{{data__root}}{{data__project__name}}/raw/',
            'merge': '{{data__root}}{{data__project__name}}/merge/'
        }
    },
    'validations': {
        'projectName': {
            'regex': /^[a-zA-Z0-9-]+$/,
            'description': 'Only letters (uppercase and lowercase), numbers, and hyphens are allowed.'
        },
        'sitemapUrl': {
            'regex': /^https:\/\/[^\s\/$.?#].[^\s]*$/,
            'description': "Allowed are 'https://' URLs with valid characters in the domain and path, excluding spaces, '/', '$,' '?,' or '#.'"
        }
    }
}


export { config }