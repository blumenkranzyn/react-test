import os
import unittest

from app import app


class QuestionsEndpoint(unittest.TestCase):

    def setUp(self):
        app.config['TESTING'] = True
        app.config['DEBUG'] = False
        self.app = app.test_client()

    def test_endpoint_should_return_200(self):
        response = self.app.get('/questions')
        self.assertEqual(response.status_code, 200)

    def test_endpoint_should_return_two_questions(self):
        response = self.app.get('/questions')
        self.assertEqual(len(response.json), 2)


if __name__ == '__main__':
    unittest.main()
