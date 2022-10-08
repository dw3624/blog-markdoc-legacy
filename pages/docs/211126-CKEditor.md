---
title: django 텍스트 에디터 (CKEditor)
tags: django python
---

## CKEditor

- 위지위그 방식의 텍스트 편집기

- WYSIWYG
  - What You See Is What You Get(보는 대로 얻는다)의 약자
  - 문서 및 문서 작성 방법을 GUI로 구현한 것을 지칭함



## 사전준비

### django library 설치

```bash
$ pip install django-ckeditor
```

### static 경로 지정

- CKEditor의 핵심코드가 js로 이뤄져 있기때문에, 이를 static으로 모아줘야함

```python
# project/settings.py
STATIC_URL = '/static/'
STATICFILES_DIRS = [ BASE_DIR / 'static' ]
```



## Text 입력

```python
# project/settings.py
INSTALLED_APPS = [
    ...
    'ckeditor',
]
```

```python
# project/app/models.py
from django.db import models
from ckeditor.fields import RichTextField

class Article(models.Model):
    title = models.CharField(max_length=100)
    content = RichTextField()
    
# 이후 migration 진행
```



## File 업로드 기능 추가

- CKEditor에서는 파일 업로드 시, 기본적으로 admin 계정을 요구하도록 옵션이 설정돼 있음
- 사용자가 업로드한 파일은 media로 분류됨
- CKEDITOR_UPLOAD_PATH는 media 루트 디렉토리의 하위 디렉토리로 설정됨

```python
# project/settings.py
INSTALLED_APPS = [
    ...
    'ckeditor',
    'ckeditor_uploader',
]

CKEDITOR_UPLOAD_PATH = 'uploads/'
# CKEDITOR_IMAGE_BACKEND = 'pillow'

MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'
```



- ckeditor_uploader가 url을 참조할 수 있도록 설정

```python
# project/urls.py
from django.conf.urls import include

urlpatterns = [
	path('ckeditor/', include('ckeditor_uploader.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```



- 모델 수정

```python
# project/app/models.py
from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField

class Article(models.Model):
    title = models.CharField(max_length=100)
    content = RichTextUploadingField()
    
# 이후 migration 진행
```



## html 표시

- 아래와 같이 입력해 html에 표시 가능

```
{{ form.media }}
{{ form.as_p }}
```

- 저장한 내용은 아래와 같이 입력해 표시 가능

```
<p>{{ article.title }}</p>
<p>{{ article.content|safe }}</p>
```



## 툴바 커스텀

- 툴바는 아래와 같이 커스텀 가능

```python
# project/settings.py
CKEDITOR_CONFIGS = {
    'default': {
        'toolbar': [
            ['Undo', 'Redo',
             '-', 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript',
             '-', 'Format',
             '-', 'SpellChecker', 'Scayt',
             '-', 'Font', 'FontSize',
             '-', 'TextColor', 'BGColor',
            ],
        ],
        'height': '100%',
        'width': '100%',
        'toolbarCanCollapse': False,
    },
}
```



---