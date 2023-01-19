# VanillaJS_Study

### 변수
+ var : 
  + 재선언이 가능하므로 사용 지양
  + 값을 업데이트해도 알아차릴 수 없음
+ let

### 상수
+ const 
___

null : 아무것도 없음, 자연발생 불가, 값은 있으나 아무것도 존재안함

undefined : 정의되지 않음, 메모리 공간은 있으나 값이 없음
___

NaN : not a number

isNaN : NaN 판별 함수
___

prompt : 입력
___

document : HTML의 값에 접근
___

h1.classList.toggle(clickClass) : 클래스 목록에 해당 클래스가 있으면 제거, 없으면 추가
___

### HTML input 기능
required : 필수 입력

maxlength : 최대 글자 수
___

``(백틱) : 문자열 표기법
___

API_KEY를 숨기기 위해 import 하였으나 오류 발생
+ Cannot use import statement outside a module Error
  + import 모듈을 사용할 파일을 지정해야 함
  + <script type="module" defer src="파일경로"></script>
___

### .gitignore
+ 유출 위험이 있는 데이터를 숨김
+ .gitignore에 파일명 작성
