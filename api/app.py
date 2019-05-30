from flask import Flask, jsonify


app = Flask(__name__)


@app.route('/questions')
def questions():
    return jsonify([
        {
            'id': 1,
            'question': 'Where does it come from?',
            'answer': 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
        },
        {
            'id': 2,
            'question': 'Why do we use it?',
            'answer': 't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
    ])
